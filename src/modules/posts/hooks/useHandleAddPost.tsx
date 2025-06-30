import { useFormik, FormikHelpers } from "formik";
import { PostRequest } from "@/types/posts";
import { FormSchema } from "@/utils/formSchemas";
import { useState } from "react";
import { addPost } from "@/api/posts";

export default function useHandleAddPost(fetchPost: () => Promise<void>) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const toggleAddModalOpen = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };

  const formik = useFormik<PostRequest>({
    initialValues: {
      title: "",
      message: "",
    },
    validationSchema: FormSchema,
    onSubmit: async (
      values: PostRequest,
      { setSubmitting, resetForm }: FormikHelpers<PostRequest>
    ) => {
      try {
        await addPost(values);
        resetForm();
        setIsAddModalOpen(false);
        fetchPost();
      } catch (error) {
        console.error(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return {
    addModalItems: {
      isAddModalOpen,
      toggleAddModalOpen,
      formik,
    },
  };
}
