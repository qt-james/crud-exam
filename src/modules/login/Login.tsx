import { AuthContext } from "@/context/AuthProvider";
import React, { useContext } from "react";

const Login = () => {
  const login = useContext(AuthContext);
  return login?.isAuth ? "Post" : "Login";
};

export default Login;
