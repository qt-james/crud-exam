import React, { ReactNode } from "react";
import { Modal as MuiModal, Box, Typography } from "@mui/material";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: 400, md: 500 },
  maxWidth: "100%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  outline: "none",
  maxHeight: "90vh",
  overflowY: "auto",
};

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: ReactNode;
  actions: ReactNode;
}

const Modal = ({ open, onClose, title, content, actions }: ModalProps) => {
  return (
    <MuiModal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
          {title}
        </Typography>
        {content}
        <Box
          sx={{ mt: 2, display: "flex", gap: 1, justifyContent: "flex-end" }}
        >
          {actions}
        </Box>
      </Box>
    </MuiModal>
  );
};

export default Modal;
