import { ReactNode, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/AuthProvider";

interface AuthProps {
  children: ReactNode;
}

const RouteProtection = ({ children }: AuthProps) => {
  const [hasMounted, setHasMounted] = useState(false);
  const auth = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    setHasMounted(true); // Wait until component is mounted
    const publicRoutes = ["/", "/register"];
    const isPublicRoute = publicRoutes.includes(router.pathname);

    if (!auth?.isAuth && !isPublicRoute) {
      router.push("/");
    }
    if (auth?.isAuth && isPublicRoute) {
      router.push("/posts");
    }
  }, [auth?.isAuth, router.pathname]);

  // Prevent hydration mismatch by avoiding render before mount
  if (!hasMounted) return null;

  return <>{children}</>;
};

export default RouteProtection;
