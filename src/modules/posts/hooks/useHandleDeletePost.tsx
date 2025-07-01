import { useState } from "react";
import { deletePost } from "@/api/posts";
import { useAlert } from "@/context/AlertProvider";

export default function useHandleDeletePost(fetchPost: () => Promise<void>) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState({
    isOpen: false,
    id: "",
  });
  const { showAlert } = useAlert();

  const toggleDeleteModalOpen = (id: string) => {
    setIsDeleteModalOpen({ isOpen: !isDeleteModalOpen.isOpen, id: id });
  };

  async function onDeletePost(): Promise<void> {
    try {
      await deletePost(isDeleteModalOpen.id);
      setIsDeleteModalOpen({ isOpen: !isDeleteModalOpen.isOpen, id: "" });
      fetchPost();
      showAlert("Successfully deleted a post!", "success");
    } catch (error) {
      console.error(error);
    }
  }

  return {
    isDeleteModalOpen,
    toggleDeleteModalOpen,
    onDeletePost,
  };
}
