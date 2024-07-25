import * as Yup from "yup";

export type UserSignUpProps = {
    firstName: string;
    lastName: string;
    User_ZipCode: string;
    User_City: string;
    User_State: string;
    email: string;
    login: string;
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
    email: "",
    login: "",
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
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
});


export const quotes = [
    "I use the empowered curriculum because it engages 99% of students from the most active participant to your most quiet.",
    "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
    "The future of the world is in my classroom today. - Ivan Welton Fitzwater",
    "Every student can learn, just not on the same day, or the same way. - George Evans",
]
