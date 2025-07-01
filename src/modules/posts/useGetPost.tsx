import { useContext } from "react";
import { useEffect, useState } from "react";
import { getPosts } from "@/api/posts";
import { AuthContext } from "@/context/AuthProvider";

const useGetPost = () => {
  const [posts, setPosts] = useState([]);
  const { isAuth } = useContext(AuthContext);

  const fetchPosts = async () => {
    try {
      const { data } = await getPosts();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts: ", error);
    }
  };

  useEffect(() => {
    if (isAuth) {
      fetchPosts();
    }
  }, [isAuth]);

  return {
    posts,
    fetchPosts,
  };
};

export default useGetPost;
