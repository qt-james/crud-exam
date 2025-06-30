import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ModalContainer from "@/components/modal/ModalContainer";
import { Button, Stack, Box, Typography } from "@mui/material";
import { FormikProps } from "formik";

interface PostDeleteModalProps {
  toggleDeleteModalOpen: () => void;
  isDeleteModalOpen: boolean;
}

export default function PostDeleteModal(props: PostDeleteModalProps) {
  const { toggleDeleteModalOpen, isDeleteModalOpen } = props;

  return (
    <ModalContainer
      isOpen={isDeleteModalOpen}
      toggleOpen={() => {
        toggleDeleteModalOpen();
      }}
      title={"Delete Post"}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 3
        }}
      >
        <WarningAmberIcon sx={{ fontSize: 80, fill: "#F54C4E" }} />
        <Typography sx={{ mb: 3}}>Are you sure you want to delete this post?</Typography>
      </Box>
      <Stack spacing={1} direction="row" sx={{ justifyContent: "flex-end" }}>
        <Button
          variant="outlined"
          onClick={() => {
            toggleDeleteModalOpen();
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#F54C4E" }}
          type="submit"
        >
          Delete Post
        </Button>
      </Stack>
    </ModalContainer>
  );
}
