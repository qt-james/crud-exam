import { useState, useEffect } from "react";
import { getPosts } from "@/api/posts";
import { PostData } from "@/types/posts";

export default function useHandleFetchPost() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function fetchAllPost(): Promise<void> {
    try {
      setIsLoading(true);

      const response = await getPosts({ limit: "5", order: "DESC" });
      setPosts(response.data);

      console.log("Fetched posts:", response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchAllPost();
  }, []);

  return { fetchAllPost, posts, isLoading };
}
