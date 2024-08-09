import { useState } from "react";
import { Form, FormikProvider } from "formik";

import Images from "../../../assets";
import Tabs from "../../../components/Tabs";
import useProfile from "./hooks/useProfile";
import CustomButton from "../../../components/Button";
import TextInput from "../../../components/TextField";
import Loader from "../../../components/Loading/Loader";
import {
  profileTabs,
  grade,
  subjectTaught,
  schoolSettings,
  roles,
} from "./constants";
import Modal from "../../../components/Modal";
import TabModel from "./Model";

function Profile() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<any>({});

  const { isLoading, formik, isUpating, user } = useProfile();
  const [activeTab, setActiveTab] = useState(profileTabs[0].value);

  const isProfile = activeTab === "myProfile" ? true : false;
  const closeModal = () => setIsOpen(false);

  const openModal = (data: any) => {
    setModalData(data);
    setIsOpen(true);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center h-[calc(100vh-120px)] items-center ">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] p-4 items-center">
        <div className="text-h3 font-h3">
          {isProfile ? "My Profile" : "My Classroom"}
        </div>
        <div>
          <Tabs
            tabs={profileTabs}
            activeTab={activeTab}
            onChange={(tab: string) => setActiveTab(tab)}
          />
        </div>
      </div>

      {isProfile && (
        <FormikProvider value={formik}>
          <Form>
            <div className="flex flex-col gap-4 border p-8 rounded-xl z-10">
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex gap-4">
                  <div className="relative -z-10">
                    <img
                      src={Images.profilePic}
                      alt="profile"
                    />
                    <div className="absolute bottom-0 right-0 cursor-pointer">
                      <img
                        src={Images.profileEdit}
                        alt="profile"
                      />
                    </div>
                  </div>

                  {/* profile text  */}
                  <div className="flex flex-col justify-center">
                    <span className="font-button">
                      {user?.FirstName + " " + user?.LastName}
                    </span>
                    <span className="text-filter-text font-filter">
                      {user?.Email}
                    </span>
                  </div>
                </div>
                <div>
                  <CustomButton
                    type="submit"
                    disabled={isUpating}
                    className="btn-secondary-outline rounded-md text-sapphire font-button w-[168px]"
                  >
                    Save
                  </CustomButton>
                </div>
              </div>

              <div className="border p-4 rounded-xl">
                <div className="font-h4 text-h4">Personal Information</div>
                <div className="grid  md:grid-cols-3 p-4 gap-4">
                  <TextInput
                    id="FirstName"
                    type="text"
                    name="FirstName"
                    label="First Name"
                    className="border-none"
                  />

                  <TextInput
                    id="LastName"
                    type="text"
                    name="LastName"
                    label="Last Name"
                    className="border-none"
                  />
                  <div></div>
                  <TextInput
                    id="Email"
                    type="email"
                    name="Email"
                    label="Email"
                    className="border-none"
                  />
                  <TextInput
                    id="mobilePhone"
                    type="text"
                    name="mobilePhone"
                    label="Phone"
                    className="border-none"
                  />
                  <TextInput
                    id="User_ZipCode"
                    type="text"
                    name="User_ZipCode"
                    label="Zip Code"
                    className="border-none"
                  />
                </div>
              </div>

              <div className="border p-4 rounded-xl">
                <div className="font-h5 text-h5">My Bio</div>
                <div className=" font-filter">
                  I’m a teacher from Kansas who loves teaching Zoology. I love
                  science and animals are awesome.
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-4">
                  <div className="border rounded-xl p-4 text-h6">
                    <div>Grade Level(s)</div>
                    <div className="flex flex-wrap gap-2 pt-2  text-body-text ">
                      {grade.selectedItems.map((e, i) => (
                        <div
                          key={i}
                          className="bg-fluorite px-4 py-1 rounded-3xl text-nowrap truncate"
                        >
                          {e.label}
                        </div>
                      ))}
                      <div
                        onClick={() => openModal(grade)}
                        className="cursor-pointer border-2 border-fluorite text-fluorite px-4 py-1 rounded-3xl text-nowrap"
                      >
                        + Add
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-xl p-4 text-h6">
                    <div>Role</div>
                    <div className="flex flex-wrap gap-2 pt-2 text-body-text">
                      {roles.selectedItems.map((e, i) => (
                        <div
                          key={i}
                          className="bg-fluorite px-4 py-1 rounded-3xl text-nowrap truncate"
                        >
                          {e.label}
                        </div>
                      ))}
                      <div
                        onClick={() => openModal(roles)}
                        className="cursor-pointer border-2 border-fluorite text-fluorite px-4 py-1 rounded-3xl text-nowrap"
                      >
                        + Add
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border rounded-xl p-4 text-h6">
                  <div>School Setting(s)</div>
                  <div className="flex flex-wrap gap-2 pt-2 text-body-text">
                    {schoolSettings.selectedItems.map((e, i) => (
                      <div
                        key={i}
                        className="bg-fluorite px-4 py-1 rounded-3xl text-nowrap truncate"
                      >
                        {e.label}
                      </div>
                    ))}
                    <div
                      onClick={() => openModal(schoolSettings)}
                      className="cursor-pointer border-2 border-fluorite text-fluorite px-4 py-1 rounded-3xl text-nowrap"
                    >
                      + Add
                    </div>
                  </div>
                </div>
                <div className="border rounded-xl p-4 text-h6">
                  <div>Subject(s)</div>
                  <div className="flex flex-wrap gap-2 pt-2 text-body-text">
                    {subjectTaught.selectedItems.map((e, i) => (
                      <div
                        key={i}
                        className="bg-fluorite px-4 py-1 rounded-3xl text-nowrap truncate"
                      >
                        {e.label}
                      </div>
                    ))}
                    <div
                      onClick={() => openModal(subjectTaught)}
                      className="cursor-pointer border-2 border-fluorite text-fluorite px-4 py-1 rounded-3xl"
                    >
                      + Add
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </FormikProvider>
      )}
      {!isProfile && (
        <div className="p-8 font-h5 text-neutral-400 text-h5 border rounded-xl h-[50vh]">
          No Classroom available yet
        </div>
      )}

      {isOpen && (
        <Modal
          isOpen={isOpen}
          autoClose={true}
          onClose={closeModal}
        >
          <TabModel
            modalData={modalData}
            closeModal={closeModal}
          />
        </Modal>
      )}
    </div>
  );
}

export default Profile;
