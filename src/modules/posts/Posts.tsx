import PostAddModal from "./modals/PostAddModal";
import PostEditModal from "./modals/PostEditModal";
import PostDeleteModal from "./modals/PostDeleteModal";
import PostViewModal from "./modals/PostViewModal";
import useHandleAddPost from "./hooks/useHandleAddPost";
import useHandleEditPost from "./hooks/useHandleEditPost";
import useHandleDeletePost from "./hooks/useHandleDeletePost";
import useHandleFetchPost from "./hooks/useHandleFetchPost";
import useHandleViewPost from "./hooks/useHandleViewPost";
import PostsTable from "./PostsTable";
import PostPagination from "./PostsPagination";
import { Container, Button, Box } from "@mui/material";

export default function Posts() {
  const {
    fetchAllPost,
    posts,
    isLoading,
    currentPage,
    totalPages,
    handlePagination,
  } = useHandleFetchPost();
  const addModalItems = useHandleAddPost(fetchAllPost);
  const editModalItems = useHandleEditPost(fetchAllPost);
  const deleteModalItems = useHandleDeletePost(fetchAllPost);
  const viewModalItems = useHandleViewPost();

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
      <PostViewModal {...viewModalItems} />
      <PostsTable
        isLoading={isLoading}
        posts={posts}
        openEditModal={editModalItems.toggleEditModalOpen}
        openDeleteModal={deleteModalItems.toggleDeleteModalOpen}
        openViewModal={viewModalItems.toggleViewModalOpen}
      />
      <PostPagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePagination={handlePagination}
      />
    </Container>
  );
}
