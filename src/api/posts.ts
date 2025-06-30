import { http } from "@/utils/axiosConfig";

interface PostData {
  title: string;
  message: string;
}

export function addPost(formData: PostData) {
  return http("POST", "/post", formData);
}

export function getPosts() {
  return http("GET", "/post");
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
