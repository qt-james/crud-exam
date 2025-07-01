import { useState, useEffect } from "react";
import { getPosts } from "@/api/posts";
import { PostData, PostMeta } from "@/types/posts";

type FetchPostParams = {
  limit?: string;
  offset?: string | number;
  order?: string;
  newPage?: number;
};

export default function useHandleFetchPost() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [metaDatas, setMetaDatas] = useState<PostMeta>({} as PostMeta);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = metaDatas?.totalPages;
  const limit = metaDatas?.limit;

  async function fetchAllPost(params?: FetchPostParams): Promise<void> {
    try {
      setIsLoading(true);

      const { data, meta } = await getPosts({
        limit: params?.limit ?? "5",
        offset: params?.offset ?? 0,
        order: params?.order ?? "DESC",
      });

      setPosts(data);
      setMetaDatas(meta);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handlePagination(newPage: number) {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);

      const offset = newPage - 1;

      fetchAllPost({ limit: limit, offset: offset, order: "DESC" });
    }
  }

  useEffect(() => {
    fetchAllPost();
  }, []);

  return {
    fetchAllPost,
    posts,
    isLoading,
    currentPage,
    totalPages,
    handlePagination,
  };
}
