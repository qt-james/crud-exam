import React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";

const TablePostsHeader = () => {
  const headerTexts = ["Title", "Message", "Date", "Actions"];
  return (
    <TableHead>
      <TableRow>
        {headerTexts.map((col) => (
          <TableCell>{col}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TablePostsHeader;
