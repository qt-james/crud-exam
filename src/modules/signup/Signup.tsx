import useHandleSignup from "./useHandleSignup";
import { Button } from "@mui/material";
import styles from "./Signup.module.scss";
import SignupTextField from "./SignupTextField";

export default function SignupForm() {
  const formik = useHandleSignup();

  return (
    <form onSubmit={formik.handleSubmit} className={styles["signup-form"]}>
      <SignupTextField
        field="firstName"
        label="First Name"
        value={formik.values.firstName}
        touched={formik.touched.firstName}
        error={formik.errors.firstName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <SignupTextField
        field="lastName"
        label="Last Name"
        value={formik.values.lastName}
        touched={formik.touched.lastName}
        error={formik.errors.lastName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <SignupTextField
        field="email"
        label="Email"
        value={formik.values.email}
        touched={formik.touched.email}
        error={formik.errors.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <SignupTextField
        field="password"
        label="Password"
        value={formik.values.password}
        touched={formik.touched.password}
        error={formik.errors.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <Button variant="contained" type="submit" disabled={formik.isSubmitting}>
        {formik.isSubmitting ? "Signning up..." : "Signup"}
      </Button>
    </form>
  );
}
