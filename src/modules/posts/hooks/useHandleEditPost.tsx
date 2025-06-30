import { useFormik, FormikHelpers } from "formik";
import { PostRequest } from "@/types/posts";
import { FormSchema } from "@/utils/formSchemas";
import { useState, useEffect } from "react";

export default function useHandleEditPost() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const toggleEditModalOpen = () => setIsEditModalOpen(!isEditModalOpen);
  const [postToEdit, setPostToEdit] = useState<PostRequest>({
    title: "",
    message: "",
  });

  const formik = useFormik<PostRequest>({
    initialValues: postToEdit,
    enableReinitialize: true,
    validationSchema: FormSchema,
    onSubmit: async (
      values,
      { setSubmitting, resetForm }: FormikHelpers<PostRequest>
    ) => {
      setSubmitting(true);
      console.log(values);
      setTimeout(() => {
        setSubmitting(false);
      }, 1000);
      resetForm();
    },
  });

  return {
    formik,
    editModalItems: {
      isEditModalOpen,
      toggleEditModalOpen,
      formik,
    },
    setPostToEdit,
  };
}
