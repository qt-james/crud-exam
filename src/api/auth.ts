import { http } from "@/utils/axiosConfig";
import { LoginData, SignupData } from "@/types/auth";

export function authSignup(formData: SignupData) {
  return http("POST", "/user/signup", formData);
}

export function authLogin(formData: LoginData) {
  return http("POST", "/auth/login", formData);
}
