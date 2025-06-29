import PrivateLayout from "./PrivateLayout";
import PublicLayout from "./PublicLayout";
import AuthCard from "../auth/AuthCard";
import { useAuth } from "@/context/AuthProvider";
import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface LayoutPropType {
  children: ReactNode;
}

export default function Layout(props: LayoutPropType) {
  const { children } = props;
  const { isAuth } = useAuth();
  const pathname: string = usePathname();

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return isAuth ? (
    <PrivateLayout>{children}</PrivateLayout>
  ) : (
    <PublicLayout>
      <AuthCard
        title={pathname === "/login" ? "Login" : "Signup"}
        subtitle={
          pathname === "/login"
            ? "Please put your credentials"
            : "Please fill up the necessary field to signup!"
        }
        authNav={
          pathname === "/login"
            ? "Doesn't have an account?"
            : "Already have an account?"
        }
        authNavTitle={pathname === "/login" ? "signup" : "login"}
      >
        {children}
      </AuthCard>
    </PublicLayout>
  );
}
