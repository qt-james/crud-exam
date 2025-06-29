import LogoutIcon from "@mui/icons-material/Logout";
import { Button, Box, Drawer } from "@mui/material";
import { useAuth } from "@/context/AuthProvider";
import { JSX } from "react";

interface LayoutSidebar {
  drawerOpen: boolean;
  drawerWidth: number;
  toggleDrawer: () => void;
  DrawerList: JSX.Element;
}

export default function LayoutSidebar(props: LayoutSidebar) {
  const { drawerOpen, drawerWidth, toggleDrawer, DrawerList } = props;
  const { logout } = useAuth();

  return (
    <Drawer
      variant="persistent"
      open={drawerOpen}
      sx={{
        width: drawerOpen ? drawerWidth : 0,
        flexShrink: 0,
        whiteSpace: "nowrap",
        transition: "width 0.3s ease",
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "primary.main",
          transition: "width 0.3s ease",
          overflowX: "hidden",
        },
      }}
    >
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box onClick={toggleDrawer}>{DrawerList}</Box>

        <Button
          variant="text"
          sx={{
            color: "white",
            width: "100%",
            marginBottom: "20px",
          }}
          startIcon={<LogoutIcon />}
          onClick={logout}
        >
          Logout
        </Button>
      </Box>
    </Drawer>
  );
}
