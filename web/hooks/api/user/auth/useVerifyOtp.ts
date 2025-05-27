import { useMutation } from "@tanstack/react-query";
import { POST } from "@/lib/api";
import { PostRoutes } from "@/types/api/PostRoutes";
import { toast } from "sonner";
import useAuthUser from "@/hooks/store/auth/useAuthUser";
import { onError } from "@/lib/utils";
import { MessageResponse } from "@/types";
import useMailSetter from "@/hooks/store/auth/useMailSetter";
import useLoading from "@/hooks/store/useLoading";
import { useRouter } from "next/navigation";


interface ForgotPasswordData {
    email: string;
    otp: number;
}

interface Response extends MessageResponse {
    accessToken: string;
    user: {
        name: string;
        id: string;
    };
}

const useVerifyOtpUser = () => {
    const { setToken, setUser } = useAuthUser();
    const { clear } = useMailSetter();
    const { setLoading } = useLoading();
    const router = useRouter();
    setLoading(true);
    return useMutation({
        mutationFn: async (data: ForgotPasswordData) => {
            const response = await POST<Response>({
                route: PostRoutes.VerifyOtpUser,
                body: data,
            });
            return response;
        },
        onSuccess: ({ accessToken, user, message }: Response) => {
            toast.success(message, { icon: '🎉' });
            setToken(accessToken);
            setUser(user);
            clear();
            router.push("/");
            setLoading(false);
        },
        onError,
        onSettled: () => {
            setLoading(false);
        }
    });
};

export default useVerifyOtpUser;
