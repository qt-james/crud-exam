import { addPost } from "@/api/posts";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";

interface AddProps {
  fetchPosts: () => void;
}

const useAddPost = ({ fetchPosts }: AddProps) => {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const handleAddOpen = () => setIsAddOpen(true);
  const handleAddClose = () => setIsAddOpen(false);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: "",
      message: "",
    },
    validationSchema: yup.object({
      title: yup.string().required("Title is required"),
      message: yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      await addPost(values);
      setIsLoading(false);
      await fetchPosts();
      resetForm();
      handleAddClose();
    },
  });

  return {
    isAddOpen,
    handleAddOpen,
    handleAddClose,
    formik,
    isLoading,
  };
};

export default useAddPost;
