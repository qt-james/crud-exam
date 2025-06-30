import { Modal, Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface ModalContainerProp {
  children: ReactNode;
  isOpen: boolean;
  title: string,
  toggleOpen: () => void;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

export default function ModalContainer(props: ModalContainerProp) {
  const { children, isOpen, toggleOpen, title } = props;

  return (
    <Modal
      open={isOpen}
      onClose={toggleOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography sx={{
          marginBottom: 2,
        }} id="modal-modal-title" variant="h5">
          {title}
        </Typography>
        {children}
      </Box>
    </Modal>
  );
}
