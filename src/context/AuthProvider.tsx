import React, { useState, createContext, ReactNode } from "react";
import cookies from "@/utils/cookies";
import { AUTH_COOKIE_NAME } from "@/configs/constants";
import { authLogin, authSignup } from "@/api/auth";
import { LoginData, SignupData } from "@/types/auth";
import { useRouter } from "next/router";

interface AuthContextType {
  isAuth: boolean;
  isLoading: boolean;
  login: (formData: LoginData) => void;
  signup: (formData: SignupData) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(!!cookies.get(AUTH_COOKIE_NAME));
  const router = useRouter();

  async function signup(formData: SignupData) {
    try {
      setIsLoading(true);
      const response = await authSignup(formData);
      console.log(response);
      router.push("/");
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  }

  async function login(formData: LoginData) {
    try {
      setIsLoading(true);

      const response = await authLogin(formData);
      cookies.set(AUTH_COOKIE_NAME, response.data.token);
      setIsAuth(true);
      router.push("/posts");
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  }

  function logout(): void {
    cookies.remove(AUTH_COOKIE_NAME);
    setIsAuth(false);
  }

  return (
    <AuthContext.Provider value={{ isAuth, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
