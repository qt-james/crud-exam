import { getPosts } from "@/api/posts";
import { PostMeta, PostData } from "@/types/posts";
import { useState } from "react";

export default function useHandlePagination(
  metaDatas: PostMeta,
  setPosts: React.Dispatch<React.SetStateAction<PostData[]>>,
  setMetaDatas: React.Dispatch<React.SetStateAction<PostMeta>>
) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = metaDatas?.totalPages;
  const limit = metaDatas?.limit;

  async function handlePagination(newPage: number) {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);

      const offset = newPage - 1;

      const response = await getPosts({
        limit: limit,
        offset: offset,
        order: "DESC",
      });

      setPosts(response.data);
      setMetaDatas(response.meta);
    }
  }

  return {
    currentPage,
    totalPages,
    handlePagination,
  };
}
