export interface EditUserRequest {
  firstName: string;
  lastName: string;
}

export interface ChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}
