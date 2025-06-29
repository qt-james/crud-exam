import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthProvider";

interface PropType {
  children: ReactNode;
}

export default function SessionRoute({ children }: PropType) {
  const { isAuth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuth) {
      router.push("/dashboard");
    }
  }, [isAuth]);

  return children;
}
