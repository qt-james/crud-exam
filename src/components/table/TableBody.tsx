import React from "react";
import {
  TableBody as MuiTableBody,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";
import { PostData } from "@/types/posts";

interface TableProps {
  posts: PostData[];
}
const TableBody = ({ posts }: TableProps) => {
  return (
    <MuiTableBody>
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
    </MuiTableBody>
  );
};

export default TableBody;
