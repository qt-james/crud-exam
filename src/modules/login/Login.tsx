import React from "react";
import {
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
  Box,
  Link as MuiLink,
} from "@mui/material";
import useLogin from "./useLogin";

import RouteProtection from "@/components/route/RouteProtection";

const Login = () => {
  const formik = useLogin();

  return (
    <RouteProtection>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "primary.main",
        }}
      >
        <Card sx={{ width: 400, p: 2 }}>
          <CardContent>
            <Typography variant="h3" align="center">
              Login
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                margin="normal"
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                fullWidth
                margin="normal"
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <Button
                sx={{ mt: 2 }}
                variant="contained"
                fullWidth
                type="submit"
              >
                Submit
              </Button>
            </form>
            <Box sx={{ mt: 2, textAlign: "center" }}>
              <Typography variant="subtitle1">
                Don&apos;t have an account?{" "}
                <MuiLink underline="hover" href="/register">
                  Register
                </MuiLink>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </RouteProtection>
  );
};

export default Login;
