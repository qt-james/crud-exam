import React from "react";
import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import Modal from "@/components/modal/Modal";

interface AddProps {
  open: boolean;
  onClose: () => void;
}

const AddModal = ({ open, onClose }: AddProps) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      message: "",
    },
    validationSchema: yup.object({
      title: yup.string().required("Title is required"),
      message: yup.string().required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form Submitted:", values);
      resetForm();
      onClose();
    },
  });

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
      <Button type="submit" onClick={formik.submitForm}>
        Add Post
      </Button>
      <Button
        onClick={() => {
          formik.resetForm();
          onClose();
        }}
      >
        Cancel
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
