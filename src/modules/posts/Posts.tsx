import React, { useContext } from "react";
import { Button, Box, Typography } from "@mui/material";
import RequireAuth from "@/components/auth/RequireAuth";
import { AuthContext } from "@/context/AuthProvider";

const Posts = () => {
  const auth = useContext(AuthContext);

  const handleLogout = () => {
    auth?.logout();
  };

  return (
    <RequireAuth>
      <Button color="error" onClick={handleLogout}>
        Logout
      </Button>
    </RequireAuth>
  );
};

export default Posts;
