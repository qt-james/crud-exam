import { ReactNode } from "react";
import { Typography, Container, Paper } from "@mui/material";

interface AuthCardProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export default function AuthCard(props: AuthCardProps) {
  const { children, title, subtitle } = props;

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        {title && (
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            textAlign="center"
          >
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="center"
            mb={3}
          >
            {subtitle}
          </Typography>
        )}
        {children}
      </Paper>
    </Container>
  );
}
