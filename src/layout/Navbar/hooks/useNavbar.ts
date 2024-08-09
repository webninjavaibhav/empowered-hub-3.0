import { useOktaAuth } from "@okta/okta-react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { updateLoading, updateProfile } from "../../../redux/feature/user/profileSlice";


const useNavbar = () => {
    const dispatch = useAppDispatch();
    const { user: userProfile, isLoading } = useAppSelector((state) => state.profile);

    const { oktaAuth, authState } = useOktaAuth();
    const [isHovered, setIsHovered] = useState(false);

    const userId = authState?.idToken?.claims?.sub;

    const getUserProfile = async () => {
        try {
            dispatch(updateLoading(true))
            const token = await axios.get(`${import.meta.env.VITE_BACKEND_BASEURL}get-token/getToken`);
            const contact = await axios.get(
                `${import.meta.env.VITE_BACKEND_BASEURL}contact/getContact/${userId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token.data.access_token}`,
                    },
                }
            );
            localStorage.setItem('salesforceToken', token.data.access_token);
            dispatch(updateProfile(contact.data));
        } catch (error) {
            toast.error("User profile not found !");
        } finally {
            dispatch(updateLoading(false))
        }
    }


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

    useEffect(() => {
        userId && getUserProfile()
    }, [userId])


    return {
        user: userProfile,
        isHovered,
        handleMouseEnter,
        handleMouseLeave,
        isLoading,
        logout
    }
}

export default useNavbar