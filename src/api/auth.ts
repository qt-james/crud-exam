import { http } from "@/utils/axiosConfig";

interface SignupData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

export function authSignup(formData: SignupData) {
  return http("POST", "/user/signup", formData);
}

export function authLogin(formData: LoginData) {
  return http("POST", "/auth/login", formData);
}
