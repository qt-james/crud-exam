import * as React from "react";
import PostsTableHeader from "./PostsTableHeader";
import PostsTableBody from "./PostsTableBody";
import { Table, TableContainer, Paper } from "@mui/material";
import { PostData, PostRequest } from "@/types/posts";

interface PostsType {
  posts: PostData[];
}

interface PostTableProps {
  openEditModal: () => void;
  postToEdit: (post: PostRequest) => void;
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

export default function PostsTable(props: PostTableProps) {
  const { openEditModal, postToEdit } = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <PostsTableHeader headerTitle={headerTitles} />
        <PostsTableBody
          posts={posts}
          openEditModal={openEditModal}
          postToEdit={postToEdit}
        />
      </Table>
    </TableContainer>
  );
}
