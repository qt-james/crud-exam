import { fetcher } from "@/utils/axiosConfig";
import { LoginResponse } from "@/types/auth";
import { EditUserRequest, ChangePasswordRequest } from "@/types/user";
import { CommonResponse } from "@/types/global";

export function userEditProfile(formData: EditUserRequest): Promise<LoginResponse> {
  return fetcher("PUT", "/user", formData);
}

export function userChangePassword(formData: ChangePasswordRequest): Promise<CommonResponse> {
  return fetcher("POST", "/user/password", formData);
}
