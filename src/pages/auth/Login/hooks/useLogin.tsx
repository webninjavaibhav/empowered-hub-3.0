import { useFormik } from "formik";
import { initialLoginState, loginValidation } from "../constants";

const useLogin = () => {
  const formik = useFormik({
    initialValues: initialLoginState,
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: loginValidation,
  });

  return {
    formik,
  };
};

export default useLogin;
