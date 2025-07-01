import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ModalContainer from "@/components/modal/ModalContainer";
import { Button, Stack, Box, Typography } from "@mui/material";

interface PostDeleteModalProps {
  isDeleteModalOpen: { isOpen: boolean; id: string };
  toggleDeleteModalOpen: (id: string) => void;
  onDeletePost: () => Promise<void>;
}

export default function PostDeleteModal(props: PostDeleteModalProps) {
  const { isDeleteModalOpen, toggleDeleteModalOpen, onDeletePost } = props;

  function openDeleteModal() {
    toggleDeleteModalOpen("");
  }

  return (
    <ModalContainer
      isOpen={isDeleteModalOpen.isOpen}
      toggleOpen={openDeleteModal}
      title={"Delete Post"}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <WarningAmberIcon sx={{ fontSize: 80, fill: "#F54C4E" }} />
        <Typography sx={{ mb: 3 }}>
          Are you sure you want to delete this post?
        </Typography>
      </Box>
      <Stack spacing={1} direction="row" sx={{ justifyContent: "flex-end" }}>
        <Button
          variant="outlined"
          onClick={openDeleteModal}
          sx={{
            color: "#F54C4E",
            borderColor: "#F54C4E",
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={onDeletePost}
          variant="contained"
          sx={{ backgroundColor: "#F54C4E" }}
        >
          Delete Post
        </Button>
      </Stack>
    </ModalContainer>
  );
}
