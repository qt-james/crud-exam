import { useFormik, FormikHelpers } from "formik";
import { EditUserRequest } from "@/types/user";
import { EditProfileSchema } from "@/utils/formSchemas";
import { useState } from "react";
import { useAlert } from "@/context/AlertProvider";
import { userEditProfile } from "@/api/user";
import cookies from "@/utils/cookies";

export default function useHandleEditProfile() {
  const [isEditProfileModal, setIsEditProfileModalOpen] = useState(false);
  const toggleEditProfileModal = () => {
    setIsEditProfileModalOpen(!isEditProfileModal);
  };
  const { showAlert } = useAlert();

  const formik = useFormik<EditUserRequest>({
    initialValues: {
      firstName: cookies.get("first-name"),
      lastName: cookies.get("last-name"),
    },
    validationSchema: EditProfileSchema,
    enableReinitialize: true,
    onSubmit: onEditProfileSubmit,
  });

  async function onEditProfileSubmit(
    values: EditUserRequest,
    { setSubmitting, resetForm }: FormikHelpers<EditUserRequest>
  ) {
    try {
      const { data } = await userEditProfile(values);
      cookies.set("first-name", data.firstName);
      cookies.set("last-name", data.lastName);
      resetForm();
      setIsEditProfileModalOpen(false);
      showAlert("You successfully edited your profile!", "success");
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  }

  return {
    isEditProfileModal,
    toggleEditProfileModal,
    formik,
  };
}
