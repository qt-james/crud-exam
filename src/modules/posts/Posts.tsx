import PostAddModal from "./modals/PostAddModal";
import PostsTable from "./PostsTable";
import { Container, Button, Box } from "@mui/material";
import useHandleAddPost from "./hooks/useHandleAddPost";

export default function Posts() {
  const { modalFunc } = useHandleAddPost();

  return (
    <Container maxWidth="xl" sx={{ marginTop: 2 }}>
      <Box
        sx={{
          display: "flex",
          mb: 2,
          justifyContent: "flex-end",
        }}
      >
        <Button
          sx={{
            fontWeight: 700,
          }}
          variant="contained"
          onClick={modalFunc.toggleAddModalOpen}
        >
          Add Post
        </Button>
      </Box>
      <PostAddModal {...modalFunc} />
      <PostsTable />
    </Container>
  );
}
