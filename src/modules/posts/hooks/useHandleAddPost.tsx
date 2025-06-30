import { useFormik, FormikHelpers } from "formik";
import { PostRequest } from "@/types/posts";
import { FormSchema } from "@/utils/formSchemas";
import { useState } from "react";

export default function useHandleAddPost() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const toggleAddModalOpen = () => setIsAddModalOpen(!isAddModalOpen);

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
    modalFunc: {
      isAddModalOpen,
      toggleAddModalOpen,
    },
  };
}
