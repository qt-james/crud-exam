import { PostData } from "@/types/posts";
import ModalContainer from "@/components/modal/ModalContainer";
import { Box, Typography } from "@mui/material";

interface PostViewModalProps {
  isViewModalOpen: { isOpen: boolean; id: string };
  toggleViewModalOpen: (id: string) => void;
  postToView: PostData;
}

export default function PostViewModal(props: PostViewModalProps) {
  const { isViewModalOpen, toggleViewModalOpen, postToView } = props;

  function closeViewModal() {
    toggleViewModalOpen("");
  }

  return (
    <ModalContainer
      isOpen={isViewModalOpen.isOpen}
      toggleOpen={closeViewModal}
      title={postToView.title}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            whiteSpace: "pre-wrap",
            flexGrow: 1,
            mt: 1,
            mb: 3,
          }}
        >
          {postToView.message}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Typography variant="caption" color="text.secondary">
            Created: {new Date(postToView.createdAt).toLocaleString()}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Updated: {new Date(postToView.updatedAt).toLocaleString()}
          </Typography>
        </Box>
      </Box>
    </ModalContainer>
  );
}
