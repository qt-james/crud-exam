import useHandleLogIn from "./useHandleLogin";
import { Button } from "@mui/material";
import styles from "./Login.module.scss";
import LoginTextField from "./LoginTextField";
import AuthCard from "@/components/auth/AuthCard";

export default function LoginForm() {
  const formik = useHandleLogIn();

  return (
    <AuthCard
      title="Login"
      subtitle="Please put in your credentials!"
      authNav="Doesn't have an account?"
      authNavTitle="signup"
    >
      <form onSubmit={formik.handleSubmit} className={styles["login-form"]}>
        <LoginTextField
          field="email"
          label="Email"
          value={formik.values.email}
          touched={formik.touched.email}
          error={formik.errors.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <LoginTextField
          field="password"
          label="Password"
          value={formik.values.password}
          touched={formik.touched.password}
          error={formik.errors.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <Button
          variant="contained"
          type="submit"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </form>
    </AuthCard>
  );
}
