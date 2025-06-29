import { fetcher } from "@/utils/axiosConfig";
import {
  LoginRequest,
  LoginResponse,
  SignupRequest,
} from "@/types/auth";
import { CommonResponse } from "@/configs/types";

export function authLogin(formData: LoginRequest): Promise<LoginResponse> {
  return fetcher("GET", "/auth/login", formData);
}
export function authSignup(
  formData: SignupRequest
): Promise<CommonResponse> {
  return fetcher("POST", "/auth/signup", formData);
}
