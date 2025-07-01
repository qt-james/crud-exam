import React from "react";
import { Button, Box, Typography } from "@mui/material";
import Table from "@/components/table/Table";
import useGetPost from "./useGetPost";
import RouteProtection from "@/components/route/RouteProtection";

const Posts = () => {
  const { posts } = useGetPost();

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
            <Button variant="contained">Add Post</Button>
          </Box>
        </Box>
        <Table posts={posts} />
      </Box>
    </RouteProtection>
  );
};

export default Posts;
