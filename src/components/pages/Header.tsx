import React, { useContext } from "react";
import { Box, Button } from "@mui/material";
import { AuthContext } from "@/context/AuthProvider";

interface HeaderProps {
  children?: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  const auth = useContext(AuthContext);

  const handleLogout = () => {
    auth?.logout();
  };

  return (
    <div>
      <header>
        <Box
          sx={{
            height: "10vh",
            backgroundColor: "grey",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: 4,
          }}
        >
          <Button variant="contained" color="error" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </header>
      {children}
    </div>
  );
};

export default Header;
