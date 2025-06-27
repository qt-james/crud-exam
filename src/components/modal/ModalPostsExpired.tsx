import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const ModalPostsExpired = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box>
        <Typography>Your session has expired </Typography>
        <Button>Go to Login</Button>
      </Box>
    </Modal>
  );
};

export default ModalPostsExpired;
