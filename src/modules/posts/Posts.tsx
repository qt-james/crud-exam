import PostAddModal from "./modals/PostAddModal";
import PostEditModal from "./modals/PostEditModal";
import PostDeleteModal from "./modals/PostDeleteModal";
import PostsTable from "./PostsTable";
import { Container, Button, Box } from "@mui/material";
import useHandleAddPost from "./hooks/useHandleAddPost";
import useHandleEditPost from "./hooks/useHandleEditPost";
import useHandleDeletePost from "./hooks/useHandleDeletePost";
import useHandleFetchPost from "./hooks/useHandleFetchPost";
import { useEffect, useState } from "react";

export default function Posts() {
  const { fetchAllPost, posts, isLoading } = useHandleFetchPost();
  const addModalItems = useHandleAddPost(fetchAllPost);
  const editModalItems = useHandleEditPost(fetchAllPost);
  const deleteModalItems = useHandleDeletePost(fetchAllPost);

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
        isLoading={isLoading}
        posts={posts}
        openEditModal={editModalItems.toggleEditModalOpen}
        openDeleteModal={deleteModalItems.toggleDeleteModalOpen}
      />
    </Container>
  );
}
