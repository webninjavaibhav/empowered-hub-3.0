import React, { useState } from "react";
import BuilderForm from "./builderForm";
import { questions } from "./constants";
import * as Yup from "yup";
import { Form, FormikProvider, useFormik } from "formik";

const Home: React.FC = () => {
  // to track the steps
  const [step, setStep] = useState(0);

  // validation schema
  const validationSchema = Yup.object().shape({
    ...questions.reduce((acc, question) => {
      acc[question.field] = question.multiselect
        ? Yup.array().min(1, `${question.question} is required`)
        : Yup.string().required(`${question.question} is required`);
      return acc;
    }, {}),
  });

  const initialValues = questions.reduce((acc, question) => {
    // Initialize form values based on questions array
    acc[question.field] = question.multiselect ? [] : "";
    return acc;
  }, {});

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values: any) => {
      alert("Submited", values);
    },
  });

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const present = questions[step];

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-fluorite to-topaz overflow-hidden">
      <h1 className="text-4xl text-white mb-8">Welcome to the Home Page</h1>
      <FormikProvider value={formik}>
        <Form>
          {/* Modal container */}
          <div className="top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg flex p-[25px] w-1/2 max-h-2/3 overflow-auto">
              <BuilderForm
                step={step}
                question={present.question}
                description={present.description}
                options={present.options}
                onNext={handleNext}
                onPrev={handlePrev}
              />
            </div>
          </div>
        </Form>
      </FormikProvider>
    </div>
  );
};

export default Home;
