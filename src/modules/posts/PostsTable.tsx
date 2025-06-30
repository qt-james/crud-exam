import * as React from "react";
import PostsTableHeader from "./PostsTableHeader";
import PostsTableBody from "./PostsTableBody";
import { Table, TableContainer, Paper } from "@mui/material";
import { PostData, PostRequest } from "@/types/posts";

interface PostTableProps {
  posts: PostData[];
  openEditModal: () => void;
  openDeleteModal: () => void;
  setPostToEdit: (post: PostRequest) => void;
}

const headerTitles = ["Title", "Message", "Data", "Actions"];

export default function PostsTable(props: PostTableProps) {
  const { openEditModal, setPostToEdit, openDeleteModal, posts } = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <PostsTableHeader headerTitle={headerTitles} />
        <PostsTableBody
          posts={posts}
          openEditModal={openEditModal}
          setPostToEdit={setPostToEdit}
          openDeleteModal={openDeleteModal}
        />
      </Table>
    </TableContainer>
  );
}
