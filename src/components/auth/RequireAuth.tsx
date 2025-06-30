import { ReactNode, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/AuthProvider";

interface AuthProps {
  children: ReactNode;
}

const RequireAuth = ({ children }: AuthProps) => {
  const [hasMounted, setHasMounted] = useState(false);
  const auth = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    setHasMounted(true); // Wait until component is mounted
    if (!auth?.isAuth) {
      router.push("/");
    }
  }, [auth?.isAuth, router]);

  // Prevent hydration mismatch by avoiding render before mount
  if (!hasMounted || !auth?.isAuth) return null;

  return <>{children}</>;
};

export default RequireAuth;
