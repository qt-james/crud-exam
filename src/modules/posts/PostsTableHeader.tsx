import { TableHead, TableRow, TableCell, Typography } from "@mui/material";

interface TableHeaderProp {
  headerTitle: string[];
}

export default function PostsTableHeader(props: TableHeaderProp) {
  const { headerTitle } = props;

  return (
    <TableHead>
      <TableRow>
        {headerTitle.map((item, index) => {
          return (
            <TableCell key={index}>
              <Typography variant="h6">{item}</Typography>
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
}
