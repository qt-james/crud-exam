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

interface PostData {
  postId: string;
  title: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
}

interface PostMeta {
  totalPages: number;
  totalRows: number;
  limit: string;
  offset: number | string;
  order: "ASC" | "DESC";
  orderBy: string;
}

export interface LoginResponse {
  data: LoginData;
}

export interface PostResponse {
  data: PostData[];
  meta: PostMeta;
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

export interface CommonResponse {
  message: string;
}

export interface PostFormDataType {
  title: string;
  message: string;
}

export interface GetPostDataType {
  postId: string;
  title: string;
  message: string;
  createdAt: string;
  updatedAt: string;
}
