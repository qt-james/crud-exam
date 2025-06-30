import PostAddModal from "./modals/PostAddModal";
import PostEditModal from "./modals/PostEditModal";
import PostDeleteModal from "./modals/PostDeleteModal";
import PostsTable from "./PostsTable";
import { Container, Button, Box } from "@mui/material";
import useHandleAddPost from "./hooks/useHandleAddPost";
import useHandleEditPost from "./hooks/useHandleEditPost";
import useHandleDeletePost from "./hooks/useHandleDeletePost";

export default function Posts() {
  const { addModalItems } = useHandleAddPost();
  const { editModalItems, setPostToEdit } = useHandleEditPost();
  const { deleteModalItems } = useHandleDeletePost();

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
      <PostDeleteModal {...deleteModalItems} />
      <PostsTable
        openEditModal={editModalItems.toggleEditModalOpen}
        openDeleteModal={deleteModalItems.toggleDeleteModalOpen}
        setPostToEdit={setPostToEdit}
      />
    </Container>
  );
}
