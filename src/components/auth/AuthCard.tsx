import { ReactNode } from "react";
import { Typography, Container, Paper, Link } from "@mui/material";
import { useRouter } from "next/router";

interface AuthCardProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  authNav?: string;
  authNavTitle?: string;
}

export default function AuthCard(props: AuthCardProps) {
  const { children, title, subtitle, authNav, authNavTitle } = props;
  const router = useRouter();

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        {title && (
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            textAlign="center"
            fontWeight={700}
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
        <Typography
          sx={{
            padding: "10px",
          }}
          variant="body2"
          color="text.secondary"
          textAlign="center"
        >
          {authNav}{" "}
          <Link onClick={() => router.push(`/${authNavTitle}`)}>
            {authNavTitle}
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
}
