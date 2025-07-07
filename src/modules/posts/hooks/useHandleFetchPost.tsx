import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getPosts } from "@/api/posts";
import { PostData, PostMeta } from "@/types/posts";
import { useAlert } from "@/context/AlertProvider";
import { isAxiosError } from "axios";

type FetchPostParams = {
  limit?: string;
  offset?: string | number;
  order?: string;
};

export default function useHandleFetchPost() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [metaDatas, setMetaDatas] = useState<PostMeta>({} as PostMeta);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { showAlert } = useAlert();
  const router = useRouter();
  const { limit } = router.query;

  const parsedLimit = parseInt(limit as string) || 5;
  const totalPages = metaDatas?.totalPages || 1;

  async function fetchAllPost(params?: FetchPostParams): Promise<void> {
    try {
      setIsLoading(true);

      const response = await getPosts({
        limit: params?.limit ?? parsedLimit.toString(),
        offset: params?.offset ?? 0,
        order: params?.order ?? "DESC",
      });

      setPosts(response?.data);
      setMetaDatas(response?.meta);
    } catch (error: unknown) {
      if (isAxiosError(error) && error.response?.status === 403) {
        showAlert("Session Expired!", "error");
      }
    } finally {
      setIsLoading(false);
    }
  }

  async function handlePagination(newPage: number) {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);

      const offset = newPage - 1;

      router.push(
        {
          pathname: "/posts",
          query: {
            ...router.query,
            page: newPage,
            limit: parsedLimit,
            offset: offset,
          },
        },
        undefined,
        { shallow: true }
      );

      fetchAllPost({
        limit: parsedLimit.toString(),
        offset: offset,
        order: "DESC",
      });
    }
  }

  useEffect(() => {
    if (!router.isReady) return;

    const pageFromUrl = parseInt(router.query.page as string) || 1;
    const offset = pageFromUrl - 1;

    setCurrentPage(pageFromUrl);
    fetchAllPost({ limit: parsedLimit.toString(), offset, order: "DESC" });
  }, [router.isReady, router.query.page, limit]);

  return {
    fetchAllPost,
    posts,
    isLoading,
    currentPage,
    totalPages: metaDatas?.totalPages ?? 1,
    handlePagination,
  };
}
