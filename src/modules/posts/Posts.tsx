import PostAddModal from "./modals/PostAddModal";
import PostEditModal from "./modals/PostEditModal";
import PostsTable from "./PostsTable";
import { Container, Button, Box } from "@mui/material";
import useHandleAddPost from "./hooks/useHandleAddPost";
import useHandleEditPost from "./hooks/useHandleEditPost";

export default function Posts() {
  const { addModalItems } = useHandleAddPost();
  const { editModalItems, setPostToEdit } = useHandleEditPost();

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
          onClick={addModalItems.toggleAddModalOpen}
        >
          Add Post
        </Button>
      </Box>
      <PostAddModal {...addModalItems} />
      <PostEditModal {...editModalItems} />
      <PostsTable
        openEditModal={editModalItems.toggleEditModalOpen}
        setPostToEdit={setPostToEdit}
      />
    </Container>
  );
}
