import { useFormik, FormikHelpers } from "formik";
import { LoginRequest } from "@/types/auth";
import { useAuth } from "@/context/AuthProvider";
import { LoginSchema } from "@/utils/formSchemas";
import { useAlert } from "@/context/AlertProvider";
import { isAxiosError } from "axios";

export default function useHandleLogIn() {
  const { login } = useAuth();
  const { showAlert } = useAlert();

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
        const response = await login(values);
        showAlert("Welcome User!", "success");
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return formik;
}
