import { fetcher } from "@/utils/axiosConfig";
import {
  LoginFormDataType,
  LoginResponse,
  SingupFormDataType,
} from "@/types/auth";
import { CommonResponse } from "@/configs/types";

export function authLogin(formData: LoginFormDataType): Promise<LoginResponse> {
  return fetcher("GET", "/auth/login", formData);
}
export function authSignup(
  formData: SingupFormDataType
): Promise<CommonResponse> {
  return fetcher("POST", "/auth/signup", formData);
}
