import React from "react";
import { Container, Box, Typography, Stack, Button } from "@mui/material";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <Container maxWidth="md" sx={{ mt: 10 }}>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom fontWeight={600}>
          Welcome to My CRUD Exam
        </Typography>

        <Typography variant="body1" color="text.secondary" mb={4}>
          Please log in or sign up to get started.
        </Typography>

        <Stack
          spacing={2}
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push("/login")}
          >
            Log In
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => router.push("/signup")}
          >
            Sign Up
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
