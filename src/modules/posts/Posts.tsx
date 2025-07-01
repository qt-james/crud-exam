import React from "react";
import { Button, Box, Typography } from "@mui/material";
import Table from "@/components/table/Table";
import useGetPost from "./useGetPost";
import RouteProtection from "@/components/route/RouteProtection";
import AddModal from "./AddModal";
import useAddPost from "./useAddPost";
import EditModal from "./EditModal";
import useEditPost from "./useEditPost";

const Posts = () => {
  const { posts, fetchPosts } = useGetPost();
  const { isAddOpen, handleAddOpen, handleAddClose, formik, isLoading } =
    useAddPost({
      fetchPosts,
    });

  const {
    isEditOpen,
    handleEditOpen,
    handleEditClose,
    selectedPost,
    setSelectedPost,
    formik: editFormik,
    isLoading: isEditLoading,
  } = useEditPost({
    fetchPosts,
  });

  return (
    <RouteProtection>
      <Box sx={{ p: 4, height: "100vh", backgroundColor: "white" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="h4" fontWeight={600} color="black">
            Posts
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button variant="contained" onClick={handleAddOpen}>
              Add Post
            </Button>
          </Box>
        </Box>
        <Table
          posts={posts}
          handleEditOpen={handleEditOpen}
          setSelectedPost={setSelectedPost}
        />
      </Box>

      <AddModal
        open={isAddOpen}
        onClose={handleAddClose}
        formik={formik}
        isLoading={isLoading}
      />

      <EditModal
        open={isEditOpen}
        onClose={handleEditClose}
        formik={formik}
        isLoading={isLoading}
      />
    </RouteProtection>
  );
};

export default Posts;
