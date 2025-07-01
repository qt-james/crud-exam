import React from "react";
import { TextField, Button } from "@mui/material";
import Modal from "@/components/modal/Modal";
import { FormikProps } from "formik";
import { PostRequest } from "@/types/posts";

interface AddPropsModal {
  open: boolean;
  onClose: () => void;
  formik: FormikProps<PostRequest>;
  isLoading: boolean;
}

const AddModal = ({ open, onClose, formik, isLoading }: AddPropsModal) => {
  const content = (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        label="Title"
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
      />
      <TextField
        sx={{ mt: 2 }}
        fullWidth
        label="Message"
        name="message"
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.message && Boolean(formik.errors.message)}
        helperText={formik.touched.message && formik.errors.message}
      />
    </form>
  );

  const actions = (
    <>
      <Button
        color="primary"
        onClick={() => {
          formik.resetForm();
          onClose();
        }}
        disabled={isLoading}
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={formik.submitForm}
        disabled={isLoading}
        loading={isLoading}
      >
        Add Post
      </Button>
    </>
  );

  return (
    <Modal
      open={open}
      onClose={() => {
        formik.resetForm();
        onClose();
      }}
      title="Add post"
      content={content}
      actions={actions}
    />
  );
};

export default AddModal;
