import { useState } from "react";
import HouseIcon from "@mui/icons-material/House";
import EditNoteIcon from "@mui/icons-material/EditNote";
import Link from "next/link";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const drawerWidth = 240;

const DrawerList = (
  <List>
    {[
      {
        title: "Dashboard",
        href: "/dashboard",
        icon: <HouseIcon sx={{ fill: "white" }} />,
      },
      {
        title: "Posts",
        href: "/posts",
        icon: <EditNoteIcon sx={{ fill: "white" }} />,
      },
    ].map((item, index) => (
      <ListItem key={index} disablePadding component={Link} href={item.href}>
        <ListItemButton>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.title} sx={{ color: "white" }} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
);

export default function useLayout() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  return { drawerOpen, toggleDrawer, drawerWidth, DrawerList };
}
