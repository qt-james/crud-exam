import ModalContainer from "@/components/modal/ModalContainer";
import { Button, Stack } from "@mui/material";
import ModalTextField from "./ModalTextField";
import { FormikProps } from "formik";
import { PostRequest } from "@/types/posts";

interface PostAddModalProps {
  toggleAddModalOpen: () => void;
  isAddModalOpen: boolean;
  formik: FormikProps<PostRequest>;
}

export default function PostAddModal(props: PostAddModalProps) {
  const { toggleAddModalOpen, isAddModalOpen, formik } = props;

  function openAddModal() {
    toggleAddModalOpen();
    formik.resetForm();
  }

  return (
    <>
      <ModalContainer
        isOpen={isAddModalOpen}
        toggleOpen={openAddModal}
        title={"Add Post :"}
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
              onClick={openAddModal}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              type="submit"
              disabled={formik.isSubmitting}
              loading={formik.isSubmitting}
            >
              Add Post
            </Button>
          </Stack>
        </form>
      </ModalContainer>
    </>
  );
}
