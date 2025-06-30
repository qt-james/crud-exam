import { useState } from "react";

export default function useHandleDeletePost() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const toggleDeleteModalOpen = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  return {
    deleteModalItems: {
      isDeleteModalOpen,
      toggleDeleteModalOpen,
    },
  };
}
