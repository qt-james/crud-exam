import PostAddModal from "./modals/PostAddModal";
import PostsTable from "./PostsTable";
import { Container, Button } from "@mui/material";
import useHandleAddPost from "./hooks/useHandleAddPost";

export default function Posts() {
  const { modalFunc } = useHandleAddPost();

  return (
    <Container maxWidth="lg" sx={{ marginTop: 2 }}>
      <Button variant="contained" onClick={modalFunc.toggleAddModalOpen}>
        Add Post
      </Button>
      <PostAddModal {...modalFunc} />
      <PostsTable />
    </Container>
  );
}
