import { useState } from "react";
import { getPostById } from "@/api/posts";
import { PostData } from "@/types/posts";

export default function useHandleViewPost() {
  const [isViewModalOpen, setIsViewModalOpen] = useState({
    isOpen: false,
    id: "",
  });
  const [postToView, setPostToView] = useState<PostData>({} as PostData);

  const toggleViewModalOpen = (id: string) => {
    setIsViewModalOpen({ isOpen: !isViewModalOpen.isOpen, id: id });
    onViewPost(id);
  };

  async function onViewPost(id: string): Promise<void> {
    try {
      const response = await getPostById(id);
      setPostToView(response);
    } catch (error) {
      console.error(error);
    }
  }

  return {  
    isViewModalOpen,
    toggleViewModalOpen,
    postToView,
  };
}
