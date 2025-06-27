interface LoginData {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  salt: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  token: string;
}

export interface LoginResponse {
  data: LoginData;
}

export interface LoginFormDataType {
  email: string;
  password: string;
}

export interface SingupFormDataType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}