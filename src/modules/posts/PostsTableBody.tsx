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
import useHandleEditPost from "./hooks/useHandleEditPost";

interface PostsTableProps {
  posts: PostData[];
  setPostToEdit: (post: PostRequest) => void;
  openEditModal: () => void;
}

export default function PostsTableBody(props: PostsTableProps) {
  const { posts, openEditModal, setPostToEdit } = props;

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
                    setPostToEdit({ title: item.title, message: item.message });
                    openEditModal();
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
