import React, { useEffect } from "react";
import { questions } from "./constants";
import Modal from "../../../components/Modal";
import useHome from "./hooks/useHome";
import BuilderForm from "./builderForm";
import Navbar from "../../../layout/Navbar";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";

const Home: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigation = useNavigate();

  const info: any = localStorage.getItem("okta-token-storage");
  const users = JSON.parse(info);
  const userInfo = (users && users?.idToken?.claims?.name) || "";

  const { authState } = useOktaAuth();

  useEffect(() => {
    if (authState?.isAuthenticated === false) {
      navigation("/signup");
    }
  }, [authState]);

  const profileBuilder = searchParams.get("profilebuilder");
  const { step, formModal, setFormModal, handleNext, handlePrev } = useHome();

  const present = questions[step];
  return (
    <div className=" bg-white h-[100vh]">
      <Navbar />

      <div className="w-screen h-screen overflow-hidden">
        <div className=" text-center p-10 font-h1 text-h1">
          Welcome {userInfo}
        </div>

        {profileBuilder ? (
          <Modal
            autoClose={false}
            onClose={() => setFormModal(false)}
            isOpen={formModal}
          >
            <div className="bg-white rounded-lg flex overflow-auto w-[320px] md:w-[720px] lg:[1080px]">
              <BuilderForm
                step={step}
                maxStep={questions.length - 1}
                question={present.question}
                description={present.description}
                options={present.options}
                onNext={handleNext}
                onPrev={handlePrev}
              />
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
