import React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";

const TableHeader = () => {
  const headerTexts = ["Title", "Message", "Date", "Actions"];
  return (
    <TableHead>
      <TableRow>
        {headerTexts.map((col) => (
          <TableCell key={col}>{col}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
