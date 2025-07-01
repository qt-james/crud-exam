import { useFormik, FormikHelpers } from "formik";
import { PostRequest } from "@/types/posts";
import { FormSchema } from "@/utils/formSchemas";
import { useState } from "react";
import { addPost } from "@/api/posts";
import { useAlert } from "@/context/AlertProvider";

export default function useHandleAddPost(fetchPost: () => Promise<void>) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const toggleAddModalOpen = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };
  const { showAlert } = useAlert();

  const formik = useFormik<PostRequest>({
    initialValues: {
      title: "",
      message: "",
    },
    validationSchema: FormSchema,
    onSubmit: onAddSubmit,
  });

  async function onAddSubmit(
    values: PostRequest,
    { setSubmitting, resetForm }: FormikHelpers<PostRequest>
  ) {
    try {
      await addPost(values);
      resetForm();
      setIsAddModalOpen(false);
      fetchPost();
      showAlert("Successfully added a post!", "success");
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  }

  return {
    isAddModalOpen,
    toggleAddModalOpen,
    formik,
  };
}
