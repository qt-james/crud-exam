import { createContext, useContext, useState, ReactNode } from "react";
import cookies from "@/utils/cookies";
import { SESSION_COOKIE } from "@/configs/constants";
import { authLogin, authSignup } from "@/api/auth";
import { useRouter } from "next/router";
import { LoginRequest, SignupRequest } from "@/types/auth";
import { useAlert } from "@/context/AlertProvider";
import { isAxiosError } from "axios";

interface AuthContextType {
  isAuth: boolean;
  isLoading: boolean;
  login: (formData: LoginRequest) => Promise<void>;
  signup: (formData: SignupRequest) => Promise<void>;
  logout: () => void;
}

interface AuthContextProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider(props: AuthContextProps) {
  const { children } = props;
  const [isAuth, setIsAuth] = useState<boolean>(!!cookies.get(SESSION_COOKIE));
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const { showAlert } = useAlert();

  async function login(formData: LoginRequest): Promise<void> {
    try {
      setIsLoading(true);

      const response = await authLogin(formData);
      cookies.set(SESSION_COOKIE, response.data.token);
      setIsAuth(true);
    } catch (error: unknown) {
      if (isAxiosError(error) && error.response?.status === 401) {
        showAlert("Incorrect Password or Email!", "error");
        return;
      }
    }

    setIsLoading(false);
  }

  async function signup(formData: SignupRequest): Promise<void> {
    try {
      setIsLoading(true);

      const response = await authSignup(formData);

      console.log(response.message);

      router.push("/login");
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  function logout(): void {
    cookies.remove(SESSION_COOKIE);
    setIsAuth(false);
  }

  return (
    <AuthContext.Provider value={{ isAuth, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext)!;
