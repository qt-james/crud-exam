import { AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useLayout from "./useLayout";

interface LayoutHeaderProps {
  drawerOpen: boolean;
  drawerWidth: number;
  toggleDrawer: () => void;
}

export default function LayoutHeader(props: LayoutHeaderProps) {
  const { drawerOpen, drawerWidth, toggleDrawer } = props;

  return (
    <AppBar
      position="fixed"
      sx={{
        width: drawerOpen ? `calc(100% - ${drawerWidth}px)` : "100%",
        ml: drawerOpen ? `${drawerWidth}px` : 0,
        transition: "all 0.3s ease",
        bgcolor: "background.default",
      }}
    >
      <Toolbar>
        <IconButton edge="start" onClick={toggleDrawer} sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
