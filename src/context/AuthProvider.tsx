import { createContext, useContext, useState, ReactNode } from "react";
import cookies from "@/utils/cookies";
import { SESSION_COOKIE } from "@/configs/constants";
import { authLogin, authSignup } from "@/api/auth";
import { useRouter } from "next/router";
import { LoginRequest, SignupRequest } from "@/types/auth";
import { useAlert } from "./AlertProvider";

interface AuthContextType {
  isAuth: boolean;
  isLoading: boolean;
  fullName: { firstName: string; lastName: string };
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
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const { showAlert } = useAlert();

  async function login(formData: LoginRequest): Promise<void> {
    try {
      setIsLoading(true);

      const response = await authLogin(formData);
      cookies.set(SESSION_COOKIE, response.data.token);
      cookies.set("first-name", response.data.firstName);
      cookies.set("last-name", response.data.lastName);
      setIsAuth(true);
      setFullName({
        firstName: cookies.get("first-name"),
        lastName: cookies.get("last-name"),
      });

      if (response) {
        showAlert("Logged in successfully!", "success");
      }
    } catch (error) {
      console.error(error);
      showAlert("Unauthorized!", "error");
    }
    setIsLoading(false);
  }

  async function signup(formData: SignupRequest): Promise<void> {
    try {
      setIsLoading(true);

      const response = await authSignup(formData);

      if (response) {
        showAlert("Signed up successfully!", "success");
      }

      router.push("/login");
    } catch (error) {
      console.error(error);
      showAlert("Signup Failed!", "error");
    }
    setIsLoading(false);
  }

  function logout(): void {
    cookies.remove(SESSION_COOKIE);
    setIsAuth(false);
  }

  return (
    <AuthContext.Provider
      value={{ isAuth, isLoading, fullName, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext)!;
