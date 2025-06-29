import { ReactNode } from "react";
import { Box } from "@mui/material";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function PublicLayout(props: AuthLayoutProps) {
  const { children } = props;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      {children}
    </Box>
  );
}
