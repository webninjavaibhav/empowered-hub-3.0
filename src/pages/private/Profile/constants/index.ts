import * as Yup from "yup";

export type userProfileProp = {
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
    mobilePhone?: string;
    secondEmail?: string;
}

export const initialUserProfile: userProfileProp = {
    firstName: "",
    lastName: "",
    User_ZipCode: "",
    User_City: "",
    User_State: "",
    email: "",
    login: "",
    User_Role: "",
    User_County: "",
    User_Country: "",
    mobilePhone: "",
    secondEmail: "",
}

export const profileValidation = Yup.object({
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

