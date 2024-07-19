import Images from "../../../assets";
import Text from "../../../components/Text";
import CustomButton from "../../../components/Button";
import TextInput from "../../../components/TextField";
import { Form, FormikProvider, useFormik } from "formik";
import { initialSignUpState, signUpValidation } from "./constants";
import useSignUp from "./hooks/useSignUp";

function Login() {
  const { handleSignUp, isLoading, error, currentQuoteIndex, quotes } =
    useSignUp();

  const formik = useFormik({
    initialValues: initialSignUpState,
    onSubmit: async (values) => {
      let res = await handleSignUp(values);
      console.log("REspoasjidfos", res);
    },
    validationSchema: signUpValidation,
  });

  return (
    <div className="w-screen bg-gradient-to-br from-fluorite to-topaz">
      {error && <>{error}</>}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
        <Text className="p-6 text-h5 font-body m-auto text-white">
          {quotes[currentQuoteIndex]}
          <div className="text-black font-h4 text-body-text">
            MEGAN K, AMES HS, IA
          </div>
        </Text>
        <FormikProvider value={formik}>
          <Form>
            <div className="flex py-[84px] px-[89px] justify-center items-center bg-white overflow-scroll md:rounded-s-[80px]">
              <div className="w-full">
                <Text className="font-h4 text-h3">Create an account</Text>
                <Text className="font-light text-sm text-slate-400 my-2">
                  Kindly fill in your details below to create an account
                </Text>
                <div className="">
                  <div className="flex justify-around">
                    <TextInput
                      id="firstName"
                      name="firstName"
                      label="First Name"
                      className="w-full me-4"
                      type="text"
                    />
                    <TextInput
                      id="lastName"
                      name="lastName"
                      label="Last Name"
                      className="w-full"
                      type="text"
                    />
                  </div>
                  <TextInput
                    id="User_State"
                    name="User_State"
                    label="State"
                    type="text"
                  />
                  <div className="flex justify-around">
                    <TextInput
                      id="User_ZipCode"
                      name="User_ZipCode"
                      label="Zip Code"
                      className="w-full me-4"
                      type="text"
                    />
                    <TextInput
                      id="User_City"
                      name="User_City"
                      label="City"
                      className="w-full"
                      type="text"
                    />
                  </div>

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

                  <Text className="font-light text-sm text-slate-600 my-2">
                    By creating an account, you agree to the{" "}
                    <span className="underline cursor-pointer">
                      Terms of use
                    </span>{" "}
                    and{" "}
                    <span className="underline cursor-pointer">
                      Privacy Policy.
                    </span>
                  </Text>

                  <CustomButton
                    type="submit"
                    isLoading={isLoading}
                    disabled={false}
                    className="btn-secondary border-none font-button mt-4"
                  >
                    Sign Up
                  </CustomButton>
                  <div className="relative inline-flex items-center justify-center w-full">
                    <hr className="w-[90%] bg-carbon" />
                    <div className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2">
                      or
                    </div>
                  </div>

                  <CustomButton
                    className="btn-primary w-full font-button border-none mt-5"
                    iconLeft={
                      <img
                        className="px-5 h-[25px]"
                        src={Images.google}
                        alt="Google"
                      />
                    }
                  >
                    Sign in with Google
                  </CustomButton>
                  <div className="text-center">
                    Already have an account?{" "}
                    <span className="text-topaz font-bold underline">
                      Sign in
                    </span>
                  </div>
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
