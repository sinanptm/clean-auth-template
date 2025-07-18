import { Repositories } from "@/di/repositories";
import { Services } from "@/di/services";
import IOtpRepository from "@/domain/interfaces/repositories/IOtpRepository";
import IUserRepository from "@/domain/interfaces/repositories/IUserRepository";
import ITokenService from "@/domain/interfaces/services/ITokenService";
import IValidatorService from "@/domain/interfaces/services/IValidatorService";
import { NotFoundError, UnauthorizedError } from "@/domain/entities/CustomErrors";
import { inject } from "inversify";
import { UserRole } from "@/types";
import { generateOtp } from "@/utils";
import { differenceInMinutes } from "date-fns";
import { OTP_EXPIRATION_MINUTES } from "@/config";
import IMailService from "@/domain/interfaces/services/IMailService";
import { IUserProfile } from "@/domain/entities/IUser";

interface Payload {
  email: string;
  otp: string;
}

export default class OtpUseCase {
  constructor(
    @inject(Repositories.UserRepository) private readonly userRepository: IUserRepository,
    @inject(Services.TokenService) private readonly tokenService: ITokenService,
    @inject(Services.ValidatorService) private readonly validatorService: IValidatorService,
    @inject(Repositories.OtpRepository) private readonly otpRepository: IOtpRepository,
    @inject(Services.MailService) private readonly mailService: IMailService,
  ) {}

  async exec({ email, otp }: Payload) {
    this.validatorService.validateRequiredFields({ email, otp });
    this.validatorService.validateEmailFormat(email);

    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new NotFoundError("User not found");
    }

    const storedOtp = await this.otpRepository.findOne(+otp, email);
    if (!storedOtp) {
      throw new UnauthorizedError("Invalid or expired OTP");
    }

    const otpCreatedAt = new Date(storedOtp.createdAt!);
    const now = new Date();

    if (differenceInMinutes(now, otpCreatedAt) > OTP_EXPIRATION_MINUTES) {
      throw new UnauthorizedError("OTP expired");
    }

    await this.otpRepository.deleteMany(email);

    const { accessToken, refreshToken } = await this.createToken(user);

    return {
      accessToken,
      refreshToken,
      user: {
        id: user._id,
        name: user.name,
      },
    };
  }

  private async createToken(user: IUserProfile) {
    const accessToken = this.tokenService.createAccessToken({
      email: user.email!,
      id: user._id!.toString(),
      role: UserRole.User,
    });

    const refreshToken = this.tokenService.createRefreshToken({
      email: user.email!,
      id: user._id!.toString(),
    });

    await this.userRepository.update(user._id!, { token: refreshToken });
    return { refreshToken, accessToken };
  }

  async resendOtp({ email }: { email: string }) {
    this.validatorService.validateEmailFormat(email);

    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new NotFoundError("User not found");
    }

    const otp = generateOtp();

    await this.otpRepository.deleteMany(email);

    await this.otpRepository.create(otp, email);

    await this.mailService.sendOtpMail({
      email,
      name: user.name!,
      otp,
    });
  }
}
