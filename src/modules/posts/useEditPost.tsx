import { editPost } from "@/api/posts";
import { PostData } from "@/types/posts";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";

interface EditProps {
  fetchPosts: () => void;
}

const useEditPost = ({ fetchPosts }: EditProps) => {
  const defaultValues: PostData = {
    postId: "",
    title: "",
    message: "",
    createdAt: "",
    updatedAt: "",
    userId: "",
  };
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<PostData>(defaultValues);
  const handleEditOpen = () => setIsEditOpen(true);
  const handleEditClose = () => setIsEditOpen(false);
  const [isLoading, setIsLoading] = useState(false);

  console.log(selectedPost.title);

  const formik = useFormik({
    initialValues: {
      title: selectedPost?.title,
      message: selectedPost?.message,
    },
    enableReinitialize: true,
    validationSchema: yup.object({
      title: yup.string().required("Title is required"),
      message: yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      // await editPost(values);
      setIsLoading(false);
      //   await fetchPosts();
      resetForm();
      handleEditClose();
    },
  });
  return {
    isEditOpen,
    handleEditOpen,
    handleEditClose,
    formik,
    isLoading,
    selectedPost,
    setSelectedPost,
  };
};

export default useEditPost;
