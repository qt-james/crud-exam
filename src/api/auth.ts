import { http } from "@/utils/axiosConfig";
import { LoginFormDataType, LoginResponse, SingupFormDataType, CommonResponse } from "@/configs/types";

export function authLogin(formData: LoginFormDataType): Promise<LoginResponse> {
  return http<LoginResponse>({
    method: "POST",
    endpoint: "/auth/login",
    formData,
  });
}
export function authSignup(formData: SingupFormDataType): Promise<CommonResponse> {
  return http<CommonResponse>({
    method: "POST",
    endpoint: "/auth/signup",
    formData,
  });
}
