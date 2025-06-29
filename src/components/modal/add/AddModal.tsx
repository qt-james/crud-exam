import React from "react";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import Modal from "../Modal";

interface AddProps {
  open: boolean;
  onClose: () => void;
}

const AddModal = ({ open, onClose }: AddProps) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleClose = () => {
    setTitle("");
    setMessage("");
    onClose();
  };

  const content = (
    <>
      <TextField
        fullWidth
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        fullWidth
        label="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </>
  );

  const actions = (
    <>
      <Button>Add Post</Button>
      <Button onClick={handleClose}>Cancel</Button>
    </>
  );

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Add post"
      content={content}
      actions={actions}
    />
  );
};

export default AddModal;
