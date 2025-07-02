import LogoutIcon from "@mui/icons-material/Logout";
import { Button, Box, Drawer, Typography, Avatar } from "@mui/material";
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
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          color: "white",
          mb: 2,
        }}
      >
        <Box component="span" sx={{ borderLeft: "4px solid #f1c40f", pl: 1, margin: 1 }}>
          CRUD EXAM
        </Box>
      </Typography>

      {/* Profile */}
      <Box
        sx={{
          textAlign: "center",
          my: 3,
          background: "white",
          padding: "10px",
          margin: "0 10px 40px",
          borderRadius: 2,
        }}
      >
        <Avatar
          src="https://i.pinimg.com/564x/1a/3d/9b/1a3d9b3b0ee022bc8c431c09dbf9bc34.jpg"
          sx={{ width: 80, height: 80, mx: "auto" }}
        />
        <Typography fontWeight="bold" mt={1}>
          YOUR NAME
        </Typography>
        <Typography color="orange" fontSize="0.9rem">
          Admin
        </Typography>
      </Box>
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
