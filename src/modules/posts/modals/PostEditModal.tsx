import ModalContainer from "@/components/modal/ModalContainer";
import { Button, Stack } from "@mui/material";
import ModalTextField from "./ModalTextField";
import { FormikProps } from "formik";
import { PostRequest } from "@/types/posts";

interface PostEditModalProps {
  toggleEditModalOpen: () => void;
  isEditModalOpen: boolean;
  formik: FormikProps<PostRequest>;
}

export default function PostEditModal(props: PostEditModalProps) {
  const { toggleEditModalOpen, isEditModalOpen, formik } = props;

  return (
    <>
      <ModalContainer
        isOpen={isEditModalOpen}
        toggleOpen={() => {
          toggleEditModalOpen();
          formik.resetForm();
        }}
        title={"Edit Post :"}
      >
        <form onSubmit={formik.handleSubmit}>
          <ModalTextField
            field="title"
            label="Title"
            value={formik.values.title}
            touched={formik.touched.title}
            error={formik.errors.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            submitting={formik.isSubmitting}
          />
          <ModalTextField
            field="message"
            label="Message"
            value={formik.values.message}
            touched={formik.touched.message}
            error={formik.errors.message}
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
              onClick={() => {
                toggleEditModalOpen();
                formik.resetForm();
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              type="submit"
              disabled={formik.isSubmitting}
              loading={formik.isSubmitting}
            >
              Edit Post
            </Button>
          </Stack>
        </form>
      </ModalContainer>
    </>
  );
}
