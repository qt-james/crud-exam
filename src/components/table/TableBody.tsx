import React from "react";
import {
  TableBody as MuiTableBody,
  TableRow,
  TableCell,
  Typography,
  IconButton,
} from "@mui/material";
import { PostData } from "@/types/posts";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

interface TableProps {
  posts: PostData[];
  handleEditOpen: () => void;
  setSelectedPost: (posts: PostData) => void;
}
const TableBody = ({ posts, handleEditOpen, setSelectedPost }: TableProps) => {
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
            <TableCell>
              <IconButton
                onClick={() => {
                  setSelectedPost(post);
                  handleEditOpen();
                }}
              >
                <ModeEditIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))
      )}
    </MuiTableBody>
  );
};

export default TableBody;
