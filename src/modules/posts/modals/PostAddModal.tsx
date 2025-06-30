import ModalContainer from "@/components/modal/ModalContainer";
import { Button, Stack } from "@mui/material";
import { useState } from "react";
import ModalTextField from "./ModalTextField";
import useHandleAddPost from "../hooks/useHandleAddPost";

export default function PostAddModal() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const formik = useHandleAddPost();

  return (
    <>
      <Button variant="contained" onClick={toggleOpen}>
        Click Me!
      </Button>
      <ModalContainer
        isOpen={isOpen}
        toggleOpen={toggleOpen}
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
              onClick={toggleOpen}
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
