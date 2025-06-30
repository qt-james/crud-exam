import React from "react";
import { useEffect, useState } from "react";
import { getPosts } from "@/api/posts";

const useGetPost = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const { data } = await getPosts();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts: ", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return {
    posts,
    fetchPosts,
  };
};

export default useGetPost;
