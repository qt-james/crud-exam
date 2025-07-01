import { FormikHelpers, useFormik } from "formik";
import { SignupRequest } from "@/types/auth";
import { useAuth } from "@/context/AuthProvider";
import { SignupSchema } from "@/utils/formSchemas";
import { useAlert } from "@/context/AlertProvider";

export default function useHandleSignup() {
  const { signup } = useAuth();
  const { showAlert } = useAlert();

  const formik = useFormik<SignupRequest>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (
      values: SignupRequest,
      { setSubmitting }: FormikHelpers<SignupRequest>
    ) => {
      try {
        await signup(values);
        showAlert("Successfully Signed up!", "success");
      } catch (error) {
        console.error("Signup failed: ", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return formik;
}
