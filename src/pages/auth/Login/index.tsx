import Images from "../../../assets";
import Text from "../../../components/Text";
import CustomButton from "../../../components/Button";
import TextInput from "../../../components/TextField";

import { Form, FormikProvider } from "formik";

import useLogin from "./hooks/useLogin";

function Login() {
  const { formik } = useLogin();

  return (
    <div className="w-screen h-dvh bg-gradient-to-br from-fluorite to-topaz">
      <div className="grid grid-cols-2">
        <Text className="font-caption text-center py-20">HELLO</Text>

        <FormikProvider value={formik}>
          <Form>
            <div className="flex justify-center items-center bg-white h-dvh rounded-s-[80px]">
              <div className="w-10/12">
                <Text className="font-semibold text-3xl">Sign in</Text>
                <Text className="font-light text-sm text-slate-400">
                  Kindly fill in your Email and Password
                </Text>
                <div className="flex gap-4 flex-col mt-4">
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
                    className="btn-secondary border-none font-button w-full"
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
