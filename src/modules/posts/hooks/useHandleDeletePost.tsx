import { useState } from "react";
import { deletePost } from "@/api/posts";

export default function useHandleDeletePost(fetchPost: () => Promise<void>) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [postId, setPostId] = useState("");
  const toggleDeleteModalOpen = (id: string) => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
    setPostId(id)
  };

  async function onDeletePost(id: string): Promise<void> {
    try {
      await deletePost(id);
      setIsDeleteModalOpen(false);
      fetchPost();
    } catch (error) {
      console.error(error);
    }
  }

  return {
    isDeleteModalOpen,
    toggleDeleteModalOpen,
    postId, 
    onDeletePost
  };
}
