import {
  TableBody,
  TableRow,
  TableCell,
  Stack,
  IconButton,
  Box,
  Skeleton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { PostData, PostRequest } from "@/types/posts";

interface PostsTableProps {
  posts: PostData[];
  openEditModal: (id: string, item: PostRequest) => void;
  openDeleteModal: (id: string) => void;
  isLoading: boolean;
}

export default function PostsTableBody(props: PostsTableProps) {
  const { posts, openEditModal, openDeleteModal, isLoading } = props;

  return (
    <TableBody>
      {isLoading ? (
        <TableRow>
          <TableCell colSpan={4}>
            <Box sx={{ width: "100%" }}>
              <Skeleton height={40} />
              <Skeleton height={40} animation="wave" />
              <Skeleton height={40} animation={false} />
            </Box>
          </TableCell>
        </TableRow>
      ) : (
        posts.map((item: PostData, index: number) => (
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
              <Stack direction="row" spacing={1}>
                <IconButton>
                  <VisibilityIcon sx={{ fill: "orange" }} />
                </IconButton>
                <IconButton
                  onClick={() => {
                    openEditModal(item.postId, {
                      title: item.title,
                      message: item.message,
                    });
                  }}
                >
                  <EditIcon sx={{ fill: "green" }} />
                </IconButton>
                <IconButton
                  onClick={() => {
                    openDeleteModal(item.postId);
                  }}
                >
                  <DeleteIcon sx={{ fill: "red" }} />
                </IconButton>
              </Stack>
            </TableCell>
          </TableRow>
        ))
      )}
    </TableBody>
  );
}
