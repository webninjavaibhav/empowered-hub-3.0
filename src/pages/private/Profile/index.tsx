import { Form, FormikProvider } from "formik";
import Loader from "../../../components/Loading/Loader";
import CustomButton from "../../../components/Button";
import TextInput from "../../../components/TextField";
import useProfile from "./hooks/useProfile";
import Navbar from "../../../layout/Navbar";

function Profile() {
  const { isLoading, formik } = useProfile();

  if (isLoading) {
    return (
      <div className="flex justify-center h-[100vh] items-center ">
        <Loader />
      </div>
    );
  }
  return (
    <div className="bg-white h-[100vh]">
      <Navbar />
      <div className="px-2 flex justify-center min-h-[calc(100vh-72px)] items-center">
        <FormikProvider value={formik}>
          <Form>
            <div className="bg-white flex flex-col gap-4 rounded-2xl p-8 border border-sapphire">
              <div className="text-h5 font-h4 overflow-auto">
                Update Profile
              </div>
              <div className="grid grid-cols-2 gap-3">
                <TextInput
                  id="firstName"
                  type="text"
                  name="firstName"
                  label="First Name"
                />

                <TextInput
                  id="lastName"
                  type="text"
                  name="lastName"
                  label="Last Name"
                />

                <TextInput
                  id="User_ZipCode"
                  type="text"
                  name="User_ZipCode"
                  label="Zip Code"
                />

                <TextInput
                  id="User_City"
                  type="text"
                  name="User_City"
                  label="City"
                />

                <TextInput
                  id="User_State"
                  type="text"
                  name="User_State"
                  label="State"
                />

                <TextInput
                  id="email"
                  type="email"
                  name="email"
                  label="Email"
                />

                {/* <TextInput
              id="login"
              type="text"
              name="login"
              label="Login"
              className="mb-4"
            /> */}

                {/* <TextInput
              id="User_Role"
              type="text"
              name="User_Role"
              label="Role"
              className="mb-4"
            /> */}

                <TextInput
                  id="User_County"
                  type="text"
                  name="User_County"
                  label="County"
                />

                <TextInput
                  id="User_Country"
                  type="text"
                  name="User_Country"
                  label="Country"
                />

                <TextInput
                  id="mobilePhone"
                  type="text"
                  name="mobilePhone"
                  label="Mobile Phone"
                />

                <TextInput
                  id="secondEmail"
                  type="email"
                  name="secondEmail"
                  label="Second Email"
                />
              </div>

              {/* Submit button */}
              <CustomButton
                type="submit"
                isLoading={isLoading}
                className="btn-primary w-full font-button"
              >
                Update
              </CustomButton>
            </div>
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
}

export default Profile;
