import { useFormik, FormikHelpers } from "formik";
import { PostRequest } from "@/types/posts";
import { FormSchema } from "@/utils/formSchemas";

export default function useHandleAddPost() {
  const formik = useFormik<PostRequest>({
    initialValues: {
      title: "",
      message: "",
    },
    validationSchema: FormSchema,
    onSubmit: async (
      values: PostRequest,
      { setSubmitting, resetForm }: FormikHelpers<PostRequest>
    ) => {
      setSubmitting(true);
      console.log(values);
      setTimeout(() => {
        setSubmitting(false);
      }, 1000);
      resetForm();
    },
  });

  return formik;
}
