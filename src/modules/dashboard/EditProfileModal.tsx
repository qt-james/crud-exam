import ModalContainer from "@/components/modal/ModalContainer";
import { Button, Stack } from "@mui/material";
import ModalTextField from "../posts/modals/ModalTextField";
import { FormikProps } from "formik";
import { EditUserRequest } from "@/types/user";

interface EditProfileModalProps {
  toggleEditProfileModal: () => void;
  isEditProfileModal: boolean;
  formik: FormikProps<EditUserRequest>;
}

export default function EditProfileModal(props: EditProfileModalProps) {
  const { toggleEditProfileModal, isEditProfileModal, formik } = props;

  function openEditProfileModal() {
    toggleEditProfileModal();
    formik.resetForm();
  }

  return (
    <>
      <ModalContainer
        isOpen={isEditProfileModal}
        toggleOpen={openEditProfileModal}
        title={"Edit Profile :"}
      >
        <form onSubmit={formik.handleSubmit}>
          <ModalTextField
            field="firstName"
            label="First Name"
            value={formik.values.firstName}
            touched={formik.touched.firstName}
            error={formik.errors.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            submitting={formik.isSubmitting}
          />
          <ModalTextField
            field="lastName"
            label="Last Name"
            value={formik.values.lastName}
            touched={formik.touched.lastName}
            error={formik.errors.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            submitting={formik.isSubmitting}
          />
          <Stack
            spacing={1}
            direction="row"
            sx={{ justifyContent: "flex-end" }}
          >
            <Button
              variant="outlined"
              disabled={formik.isSubmitting}
              onClick={openEditProfileModal}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              type="submit"
              disabled={formik.isSubmitting}
              loading={formik.isSubmitting}
            >
              Edit Profile
            </Button>
          </Stack>
        </form>
      </ModalContainer>
    </>
  );
}
