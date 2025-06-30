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
import { PostData, PostRequest } from "@/types/posts";

interface PostsTableProps {
  posts: PostData[];
  postToEdit: (post: PostRequest) => void; 
  openEditModal: () => void;
}

export default function PostsTableBody(props: PostsTableProps) {
  const { posts, openEditModal, postToEdit } = props;

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
                  <VisibilityIcon sx={{ fill: "orange" }} />
                </IconButton>
                <IconButton
                  onClick={() => {
                    openEditModal();
                    postToEdit({ title: item.title, message: item.message });
                  }}
                >
                  <EditIcon sx={{ fill: "green" }} />
                </IconButton>
                <IconButton>
                  <DeleteIcon sx={{ fill: "red" }} />
                </IconButton>
              </Stack>
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
}
