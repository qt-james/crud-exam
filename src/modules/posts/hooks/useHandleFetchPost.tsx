import { useState } from "react";
import { getPosts } from "@/api/posts";
import { PostData } from "@/types/posts";

export default function useHandleFetchPost() {
  const [posts, setPosts] = useState<PostData[]>([
    {
      postId: "",
      title: "",
      message: "",
      createdAt: "",
      updatedAt: "",
      userId: "",
    },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function fetchAllPost(): Promise<void> {
    try {
      setIsLoading(true);

      const response = await getPosts();
      setPosts(response.data);

      console.log("Fetched posts:", response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return { fetchAllPost, posts, isLoading };
}
