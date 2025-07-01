import { useState } from "react";

const useAddPost = () => {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const handleAddOpen = () => setIsAddOpen(true);
  const handleAddClose = () => setIsAddOpen(false);

  return {
    isAddOpen,
    handleAddOpen,
    handleAddClose,
  };
};

export default useAddPost;
