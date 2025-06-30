import {
  TableBody,
  TableRow,
  TableCell,
  Stack,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { PostData } from "@/types/posts";

interface PostsTableProps {
  posts: PostData[];
}

export default function PostsTableBody(props: PostsTableProps) {
  const { posts } = props;

  return (
    <TableBody>
      {posts.map((item: PostData, index: number) => {
        return (
          <TableRow key={index}>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.message}</TableCell>
            <TableCell>{item.createdAt}</TableCell>
            <TableCell
              sx={{
                width: "1%",
                whiteSpace: "nowrap",
                textAlign: "center",
              }}
            >
              <Stack direction={"row"}>
                <IconButton>
                  <DeleteIcon sx={{ fill: "red" }} />
                </IconButton>
                <IconButton>
                  <EditIcon sx={{ fill: "green" }} />
                </IconButton>
                <IconButton>
                  <VisibilityIcon sx={{ fill: "orange" }} />
                </IconButton>
              </Stack>
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
}
