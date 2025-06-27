import React from "react";
import { useState } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";

const ModalPosts = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box component="form">
        <Typography> ___ Post</Typography>
        <TextField id="title" name="title" label="Title" />
        <TextField id="message" name="message" label="Message" />
        <Button type="submit">Submit</Button>
        <Button onClick={handleClose}>Cancel</Button>
      </Box>
    </Modal>
  );
};

export default ModalPosts;
