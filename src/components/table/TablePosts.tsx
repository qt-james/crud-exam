import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
} from "@mui/material";

const TablePosts = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Message</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {/* if posts length = 0*/}
            <TableCell colSpan={4} align="center">
              <Typography variant="h6">No posts yet</Typography>
            </TableCell>
          </TableRow>

          {/* map posts in this TableRow */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablePosts;
