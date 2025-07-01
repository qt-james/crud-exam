// components/table/TablePosts.tsx
import React from "react";
import { TableContainer, Table as MuiTable } from "@mui/material";
import TableHeader from "./TableHeader";
import { PostData } from "@/types/posts";
import TableBody from "./TableBody";

interface TableProps {
  posts: PostData[];
}

const TablePosts = ({ posts }: TableProps) => {
  return (
    <TableContainer>
      <MuiTable>
        <TableHeader />
        <TableBody posts={posts} />
      </MuiTable>
    </TableContainer>
  );
};

export default TablePosts;
