export interface PostData {
  postId: string;
  title: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  userId?: string;
}

interface PostMeta {
  totalPages: number;
  totalRows: number;
  limit: string;
  offset: number | string;
  order: "ASC" | "DESC";
  orderBy: string;
}

export interface PostResponse {
  data: PostData[];
  meta: PostMeta;
}

export interface PostRequest {
  title: string;
  message: string;
} 

