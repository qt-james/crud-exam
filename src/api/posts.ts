import { http } from "@/utils/axiosConfig";
import {
  CommonResponse,
  PostFormDataType,
  GetPostDataType,
  PostResponse,
} from "@/configs/types";

export function addPost(formData: PostFormDataType): Promise<CommonResponse> {
  return http({
    method: "POST",
    endpoint: "/post",
    formData,
  });
}

export function getPosts(): Promise<PostResponse> {
  return http({
    method: "GET",
    endpoint: "/post",
  });
}

export function getPostById(postId: string): Promise<GetPostDataType> {
  return http({
    method: "GET",
    endpoint: `/post/${postId}`,
  });
}

export function editPost(
  postId: string,
  formData: PostFormDataType
): Promise<CommonResponse> {
  return http({
    method: "PUT",
    endpoint: `/post/${postId}`,
    formData,
  });
}

export function deletePost(postId: string): Promise<CommonResponse> {
  return http({
    method: "DELETE",
    endpoint: `/post/${postId}`,
  });
}
