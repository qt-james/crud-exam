import { useFormik, FormikHelpers } from "formik";
import { LoginRequest } from "@/types/auth";
import { useAuth } from "@/context/AuthProvider";
import { LoginSchema } from "@/utils/formSchemas";

export default function useHandleLogIn() {
  const { login } = useAuth();

  const formik = useFormik<LoginRequest>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (
      values: LoginRequest,
      { setSubmitting }: FormikHelpers<LoginRequest>
    ) => {
      try {
        await login(values);
      } catch (error) {
        console.error("Login failed:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return formik;
}
