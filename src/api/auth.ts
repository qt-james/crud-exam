import { fetcher } from "@/utils/axiosConfig";
import { LoginRequest, LoginResponse, SignupRequest } from "@/types/auth";
import { CommonResponse } from "@/types/global";

export function authLogin(formData: LoginRequest): Promise<LoginResponse> {
  return fetcher("POST", "/auth/login", formData);
}
export function authSignup(formData: SignupRequest): Promise<CommonResponse> {
  return fetcher("POST", "/user/signup", formData);
}
