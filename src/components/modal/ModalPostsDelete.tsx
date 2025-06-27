import React from "react";
import { Modal, Typography, Box, Button } from "@mui/material";

const ModalPostsDelete = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box>
        <Typography>Delete Post</Typography>
        <Typography>Are you sure you want to delete _____ ?</Typography>
        <Button>Delete</Button>
        <Button>Cancel</Button>
      </Box>
    </Modal>
  );
};

export default ModalPostsDelete;
