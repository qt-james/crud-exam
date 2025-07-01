import PostsTableHeader from "./PostsTableHeader";
import PostsTableBody from "./PostsTableBody";
import { Table, TableContainer, Paper } from "@mui/material";
import { PostData, PostRequest } from "@/types/posts";

interface PostTableProps {
  posts: PostData[];
  openEditModal: (id: string, item: PostRequest) => void;
  openDeleteModal: (id: string) => void;
  isLoading: boolean;
}

const headerTitles = ["Title", "Message", "Date", "Actions"];

export default function PostsTable(props: PostTableProps) {
  const { openEditModal, openDeleteModal, posts, isLoading } = props;

  return (
    <TableContainer component={Paper} sx={{ height: 430}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <PostsTableHeader headerTitle={headerTitles} />
        <PostsTableBody
          isLoading={isLoading}
          posts={posts}
          openEditModal={openEditModal}
          openDeleteModal={openDeleteModal}
        />
      </Table>
    </TableContainer>
  );
}
