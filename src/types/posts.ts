export interface PostData {
  postId: string;
  title: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  userId?: string;
}

export interface PostRequest {
  title: string;
  message: string;
}
