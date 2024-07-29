import Images from "../../../assets";
import Text from "../../../components/Text";
import CustomButton from "../../../components/Button";
import TextInput from "../../../components/TextField";

import { Form, FormikProvider } from "formik";
import useSignUp from "./hooks/useSignUp";
import Loader from "../../../components/Loading/Loader";

function Login() {
  const {
    formik,
    isLoading,
    error,
    currentQuoteIndex,
    quotes,
    images,
    authState,
    login,
  } = useSignUp();

  if (!authState) {
    return <Loader />;
  }

  return (
    <div className="bg-gradient-to-br from-fluorite to-topaz">
      {error && <>{error}</>}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center h-full">
        <Text className="p-6 text-h5 font-body m-auto text-white">
          <img
            src={images[currentQuoteIndex]}
            className="h-[120px]"
            alt="profile"
          />
          {quotes[currentQuoteIndex]}
          <div className="text-black font-h4 text-body-text">
            MEGAN K, AMES HS, IA
          </div>
        </Text>
        <FormikProvider value={formik}>
          <Form className="h-full">
            <div className="flex py-[84px] px-[89px] justify-center items-center bg-white overflow-scroll md:rounded-s-[80px] h-full">
              <div className="w-full">
                <Text className="font-h4 text-h3">Create an account</Text>
                <Text className="font-light text-sm text-slate-400 my-2">
                  Kindly fill in your details below to create an account
                </Text>
                <div className="">
                  <div className="flex justify-around gap-4">
                    <TextInput
                      id="firstName"
                      name="firstName"
                      label="First Name"
                      className="w-full"
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
                    id="email"
                    name="email"
                    label="Email"
                    type="text"
                    className="my-4"
                  />

                  <TextInput
                    id="User_State"
                    name="User_State"
                    label="State"
                    className="my-4"
                    type="text"
                  />
                  <div className="flex justify-around gap-4">
                    <TextInput
                      id="User_ZipCode"
                      name="User_ZipCode"
                      label="Zip Code"
                      className="w-full"
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

                  <div className="flex">
                    <div className="mt-2">
                      <input
                        aria-label="term and condition"
                        type="checkbox"
                      />
                    </div>
                    <Text className="font-light text-sm text-slate-600 my-2">
                      You agree to the{" "}
                      <a
                        target="_blank"
                        rel="noopener"
                        href="https://teachempowered.org/terms-of-use"
                        className="underline cursor-pointer"
                      >
                        Empowered Hub Terms of Use
                      </a>
                      {"   "}
                      and the{" "}
                      <a
                        target="_blank"
                        rel="noopener"
                        href="https://www.mightynetworks.com/terms-of-use"
                        className="underline cursor-pointer"
                      >
                        Mighty Networks Terms of Use
                      </a>{" "}
                      and{" "}
                      <a
                        target="_blank"
                        rel="noopener"
                        href="https://www.mightynetworks.com/privacy-policy"
                        className="underline cursor-pointer"
                      >
                        {" "}
                        Privacy Policy.
                      </a>
                    </Text>
                  </div>
                  <CustomButton
                    type="submit"
                    isLoading={isLoading}
                    disabled={false}
                    className="btn-secondary border-none font-button mt-4 mb-2 w-full"
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
                    className="btn-primary w-full font-button border-none mt-4"
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
                  <div className="text-center pt-4">
                    Already have an account?{" "}
                    <span
                      onClick={login}
                      className="text-topaz font-bold underline cursor-pointer"
                    >
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
