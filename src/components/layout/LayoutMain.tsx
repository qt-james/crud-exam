import { ReactNode } from "react";
import { Box, Toolbar } from "@mui/material";
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
      sx={
        !isAuth
          ? {
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "primary.main",
            }
          : {
              width: drawerOpen ? `calc(100% - ${drawerWidth}px)` : "100%",
              ml: drawerOpen ? `${drawerWidth}px` : 0,
              transition: "all 0.3s ease",
            }
      }
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
          <Toolbar />
        </>
      )}
      {children}
    </Box>
  );
}
