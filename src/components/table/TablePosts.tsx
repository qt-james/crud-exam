// components/table/TablePosts.tsx
import React from "react";
import {
  TableContainer,
  Table as MuiTable,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";
import TablePostsHeader from "./TablePostsHeader";
import { PostData } from "@/types/posts";

interface TableProps {
  posts: PostData[];
}

const TablePosts = ({ posts }: TableProps) => {
  return (
    <TableContainer>
      <MuiTable>
        <TablePostsHeader />
        <TableBody>
          {posts.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} align="center">
                <Typography variant="h6">No posts yet</Typography>
              </TableCell>
            </TableRow>
          ) : (
            posts.map((post: PostData, index: number) => (
              <TableRow key={index}>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.message}</TableCell>
                <TableCell>
                  {new Date(post.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>{/*Action Buttons */}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default TablePosts;
