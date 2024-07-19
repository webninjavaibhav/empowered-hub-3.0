import * as Yup from "yup";

// not available okta fields
// Role
// User_Role

// Country
// User_County

// Country
// User_Country



export type UserSignUpProps = {
    firstName: string;
    lastName: string;
    User_ZipCode: string;
    User_City: string;
    User_State: string;
    // email: string;
    // password: string;
    User_Role?: string;
    User_County?: string;
    User_Country?: string;
}

export const initialSignUpState: UserSignUpProps = {
    firstName: "",
    lastName: "",
    User_ZipCode: "",
    User_City: "",
    User_State: "",
    // email: "",
    // password: "",
}

export const signUpValidation = Yup.object({
    firstName: Yup.string()
        .min(3, "First name must be at least 3 characters")
        .max(20, "First name must be less than 20 characters")
        .required("First name is required"),
    lastName: Yup.string()
        .min(3, "Last name must be at least 3 characters")
        .max(20, "Last name must be less than 20 characters")
        .required("Last name is required"),
    User_ZipCode: Yup.string().required(),
    // email: Yup.string()
    //     .email('Invalid email address')
    //     .required('Email is required'),
    User_City: Yup.string().required(),
    User_State: Yup.string().required(),
    // password: Yup.string().required(),
});




export const quotes = [
    "I use the empowered curriculum because it engages 99% of students from the most active participant to your most quiet.",
    "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
    "The future of the world is in my classroom today. - Ivan Welton Fitzwater",
    "Every student can learn, just not on the same day, or the same way. - George Evans",
]