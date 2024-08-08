import { useOktaAuth } from "@okta/okta-react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


const useNavbar = () => {
    const { oktaAuth, authState } = useOktaAuth();
    const [isHovered, setIsHovered] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const userId = authState?.idToken?.claims?.sub;

    const getUserProfile = async () => {
        try {
            const token = await axios.get(`${import.meta.env.VITE_BACKEND_BASEURL}get-token/getToken`);
            const contact = await axios.get(
                `${import.meta.env.VITE_BACKEND_BASEURL}contact/getContact/${userId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token.data.access_token}`,
                    },
                }
            );
            setIsLoading(false)
            localStorage.setItem('salesforceToken', token.data.access_token);
            localStorage.setItem('userProfile', JSON.stringify(contact.data));
        } catch (error) {
            console.error("Error fetching Salesforce token:", error);
        }
    }

    useEffect(() => {
        userId && getUserProfile()
    }, [userId])

    const isCorsError = (err: any) =>
        err.name === "AuthApiError" &&
        !err.errorCode &&
        err.xhr.message === "Failed to fetch";

    const logout = async () => {
        localStorage.clear();
        sessionStorage.clear();
        try {
            await oktaAuth.signOut();
        } catch (err) {
            if (isCorsError(err)) {
                toast.error(JSON.stringify(err));
            } else {
                throw err;
            }
        }
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const savedUser = localStorage.getItem("userProfile");


    return {
        user: savedUser && JSON.parse(savedUser),
        isHovered,
        handleMouseEnter,
        handleMouseLeave,
        isLoading,
        logout
    }
}

export default useNavbar