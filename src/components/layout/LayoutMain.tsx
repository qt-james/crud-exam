import { ReactNode } from "react";
import { Box } from "@mui/material";
import LayoutSidebar from "./LayoutSidebar";
import LayoutHeader from "./LayoutHeader";
import useLayout from "./useLayout";
import { useAuth } from "@/context/AuthProvider";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function PublicLayout(props: AuthLayoutProps) {
  const { children } = props;
  const { drawerOpen, toggleDrawer, drawerWidth, DrawerList } = useLayout();
  const { isAuth } = useAuth();

  return (
    <Box
      component={"main"}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      {isAuth && (
        <>
          <LayoutHeader
            drawerOpen={drawerOpen}
            drawerWidth={drawerWidth}
            toggleDrawer={toggleDrawer}
          />
          <LayoutSidebar
            drawerOpen={drawerOpen}
            drawerWidth={drawerWidth}
            toggleDrawer={toggleDrawer}
            DrawerList={DrawerList}
          />
        </>
      )}
      {children}
    </Box>
  );
}
