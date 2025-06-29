import { fetcher } from "@/utils/axiosConfig";
import { PostRequest, PostResponse, PostData } from "@/types/posts";
import { CommonResponse } from "@/types/global";

export function addPost(formData: PostRequest): Promise<CommonResponse> {
  return fetcher("POST", "/post", formData);
}

export function getPosts(): Promise<PostResponse> {
  return fetcher("GET", "/post");
}

export function getPostById(postId: string): Promise<PostData> {
  return fetcher("GET", `/post/${postId}`);
}

export function editPost(
  postId: string,
  formData: PostRequest
): Promise<CommonResponse> {
  return fetcher("PUT", `/post/${postId}`, formData);
}

export function deletePost(postId: string): Promise<CommonResponse> {
  return fetcher("DELETE", `/post/${postId}`);
}
