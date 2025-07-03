import { useState } from "react";
import { getPostById } from "@/api/posts";
import { PostData } from "@/types/posts";

export default function useHandleViewPost() {
  const [isViewModalOpen, setIsViewModalOpen] = useState({
    isOpen: false,
    id: "",
  });
  const [postToView, setPostToView] = useState<PostData>({} as PostData);

  const toggleViewModalOpen = async (id: string) => {
    try {
      setIsViewModalOpen({ isOpen: !isViewModalOpen.isOpen, id: id });
      const response = await getPostById(id);
      setPostToView(response);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    isViewModalOpen,
    toggleViewModalOpen,
    postToView,
  };
}
