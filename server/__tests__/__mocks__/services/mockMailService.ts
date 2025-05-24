import IMailService from "@/domain/interfaces/services/IMailService";

const mockMailService: jest.Mocked<IMailService> = {
    sendOtpMail: jest.fn(),
};

export default mockMailService;
