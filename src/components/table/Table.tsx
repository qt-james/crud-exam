// components/table/TablePosts.tsx
import React from "react";
import { TableContainer, Table as MuiTable } from "@mui/material";
import TableHeader from "./TableHeader";
import { PostData } from "@/types/posts";
import TableBody from "./TableBody";

interface TableProps {
  posts: PostData[];
  handleEditOpen: () => void;
  setSelectedPost: (posts: PostData) => void;
}

const TablePosts = ({ posts, handleEditOpen, setSelectedPost }: TableProps) => {
  return (
    <TableContainer>
      <MuiTable>
        <TableHeader />
        <TableBody
          posts={posts}
          handleEditOpen={handleEditOpen}
          setSelectedPost={setSelectedPost}
        />
      </MuiTable>
    </TableContainer>
  );
};

export default TablePosts;
