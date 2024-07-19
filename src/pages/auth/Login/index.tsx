import Images from "../../../assets";
import Text from "../../../components/Text";
import CustomButton from "../../../components/Button";
import TextInput from "../../../components/TextField";
import { Form, FormikProvider, useFormik } from "formik";

import { initialLoginState, loginValidation } from "./constants";

function Login() {
  const formik = useFormik({
    initialValues: initialLoginState,
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: loginValidation,
  });

  return (
    <div className="w-screen h-dvh bg-gradient-to-br from-fluorite to-topaz">
      <div className="grid grid-cols-2">
        <Text className="font-caption text-center py-20">
          quote : "Times New Roman"
        </Text>
        <FormikProvider value={formik}>
          <Form>
            <div className="flex justify-center items-center bg-white h-dvh rounded-s-[80px]">
              <div className="w-10/12">
                <Text className="font-semibold text-3xl">Sign in</Text>
                <Text className=" font-light text-sm text-slate-400">
                  Kindly fill in your Email and Password
                </Text>
                <div className="">
                  <TextInput
                    id="email"
                    name="email"
                    label="Email"
                    type="text"
                  />

                  <TextInput
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    rightIcon={
                      <img
                        src={Images.closeEye}
                        alt="Close eye"
                      />
                    }
                  />

                  <div className="flex items-center justify-end">
                    <Text className="text-sm font-light cursor-pointer">
                      Forget password ?
                    </Text>
                  </div>

                  <CustomButton
                    type="submit"
                    onClick={() => ""}
                    disabled={false}
                    className="btn-secondary border-none mt-6 font-button "
                  >
                    Sign In
                  </CustomButton>
                </div>
              </div>
            </div>
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
}

export default Login;
