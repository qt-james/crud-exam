import * as React from "react";
import PostsTableHeader from "./PostsTableHeader";
import PostsTableBody from "./PostsTableBody";
import { Table, TableContainer, Paper } from "@mui/material";
import { PostData } from "@/types/posts";

interface PostsType {
  posts: PostData[];
}

const posts = [
  {
    postId: "1",
    title: "Testing",
    message: "Testing Message",
    createdAt: "Jan 12, 1980",
    updatedAt: "Jan 12, 1980",
    userId: "1212",
  },
  {
    postId: "1",
    title: "Testing",
    message: "Testing Message",
    createdAt: "Jan 12, 1980",
    updatedAt: "Jan 12, 1980",
    userId: "1212",
  },
  {
    postId: "1",
    title: "Testing",
    message: "Testing Message",
    createdAt: "Jan 12, 1980",
    updatedAt: "Jan 12, 1980",
    userId: "1212",
  },
  {
    postId: "1",
    title: "Testing",
    message: "Testing Message",
    createdAt: "Jan 12, 1980",
    updatedAt: "Jan 12, 1980",
    userId: "1212",
  },
  {
    postId: "1",
    title: "Testing",
    message: "Testing Message",
    createdAt: "Jan 12, 1980",
    updatedAt: "Jan 12, 1980",
    userId: "1212",
  },
];

const headerTitles = ["Title", "Message", "Data", "Actions"];

export default function PostsTable() {
  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <PostsTableHeader headerTitle={headerTitles} />
        <PostsTableBody posts={posts} />
      </Table>
    </TableContainer>
  );
}
