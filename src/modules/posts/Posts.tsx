import React, { useContext, useState, useEffect } from "react";
import { Button, Box, Typography } from "@mui/material";
import RequireAuth from "@/components/auth/RequireAuth";
import { AuthContext } from "@/context/AuthProvider";
import TablePosts from "@/components/table/TablePosts";
import { getPosts } from "@/api/posts";

const Posts = () => {
  const auth = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  const handleLogout = () => {
    auth?.logout();
  };

  const fetchPosts = async () => {
    try {
      const data = await getPosts();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts: ", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <RequireAuth>
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
            <Button variant="contained">Add Post</Button>
            <Button variant="outlined" color="error" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        </Box>
        <TablePosts posts={posts} />
      </Box>
    </RequireAuth>
  );
};

export default Posts;
