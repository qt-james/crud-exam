import React from "react";
import { useContext } from "react";
import AuthProvider, { AuthContext } from "@/context/AuthProvider";
import { useRouter } from "next/router";
import RequireAuth from "@/components/auth/RequireAuth";

const Posts = () => {
  return (
    <RequireAuth>
      <div>Posts</div>
    </RequireAuth>
  );
};

export default Posts;
