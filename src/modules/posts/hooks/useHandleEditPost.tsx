import { useFormik, FormikHelpers } from "formik";
import { PostRequest } from "@/types/posts";
import { FormSchema } from "@/utils/formSchemas";
import { useState } from "react";
import { editPost } from "@/api/posts";
import { useAlert } from "@/context/AlertProvider";

export default function useHandleEditPost(fetchPost: () => Promise<void>) {
  const [isEditModalOpen, setIsEditModalOpen] = useState({
    isOpen: false,
    id: "",
  });
  const [postToEdit, setPostToEdit] = useState<PostRequest>({
    title: "",
    message: "",
  });
  const { showAlert } = useAlert();

  const toggleEditModalOpen = (id: string, item: PostRequest) => {
    setIsEditModalOpen({ isOpen: !isEditModalOpen.isOpen, id: id });
    setPostToEdit(item);
  };

  const formik = useFormik<PostRequest>({
    initialValues: postToEdit,
    enableReinitialize: true,
    validationSchema: FormSchema,
    onSubmit: onEditSubmit,
  });

  async function onEditSubmit(
    values: PostRequest,
    { setSubmitting, resetForm }: FormikHelpers<PostRequest>
  ) {
    try {
      await editPost(isEditModalOpen.id, values);
      resetForm();
      setIsEditModalOpen({ isOpen: !isEditModalOpen.isOpen, id: "" });
      fetchPost();
      showAlert("Successfully edited a post!", "success");
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  }

  return {
    isEditModalOpen,
    toggleEditModalOpen,
    formik,
  };
}
