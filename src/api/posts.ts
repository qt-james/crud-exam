import { http } from "@/utils/axiosConfig";
import { PostData } from "@/types/posts";

export function addPost(formData: PostData) {
  return http("POST", "/post", formData);
}

export function getPosts() {
  return http("GET", "/post?limit=5&order=DESC");
}

export function getPost(postId: string) {
  return http("GET", `/post/${postId}`);
}

export function editPost(postId: string, formData: PostData) {
  return http("PUT", `/post/${postId}`, formData);
}
export function deletePost(postId: string) {
  return http("DELETE", `/post/${postId}`);
}
