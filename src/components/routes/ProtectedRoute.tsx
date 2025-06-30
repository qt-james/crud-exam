import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthProvider";

interface PropType {
  children: ReactNode;
}

const publicRoutes: string[] = ["/login", "/signup"];
const privateRoutes: string[] = ["/dashboard", "/posts"];

export default function ProtectedRoute({ children }: PropType) {
  const { isAuth } = useAuth();
  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    if (!isAuth && privateRoutes.includes(pathname)) {
      router.push("/login");
    }

    if (isAuth && publicRoutes.includes(pathname)) {
      router.push("/dashboard");
    }
  }, [isAuth, pathname]);

  return children;
}
