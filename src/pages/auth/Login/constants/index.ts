import * as Yup from "yup";

export const initialLoginState = {
    email: "",
    password: "",
}

export const loginValidation = Yup.object({
    email: Yup.string()
        .min(2, "email must be at least 2 characters")
        .max(50, "email must be less than 50 characters")
        .required("email is required"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .max(20, "Password must be less than 20 characters")
        .required("Password is required"),
});