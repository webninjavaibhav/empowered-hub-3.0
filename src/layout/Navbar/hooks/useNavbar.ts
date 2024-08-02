import { useOktaAuth } from "@okta/okta-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";




const useNavbar = () => {
    const { oktaAuth } = useOktaAuth();
    const [isHovered, setIsHovered] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const info = localStorage.getItem("okta-token-storage");
    const user = info && JSON.parse(info);
    const userId = user?.accessToken?.claims?.uid;

    const getUserProfile = async () => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_BACKEND_BASEURL}user/${userId}`
            );
            const parsedVal = await response.json();
            localStorage.setItem("user", JSON.stringify(parsedVal.profile));
            setIsLoading(false)
        } catch (error) {
            toast.error("Something went wrong !");
        }
    };

    useEffect(() => {
        userId && getUserProfile()
    }, [userId])

    const isCorsError = (err: any) =>
        err.name === "AuthApiError" &&
        !err.errorCode &&
        err.xhr.message === "Failed to fetch";

    const logout = async () => {
        localStorage.clear();
        const basename = window.location.origin;
        try {
            await oktaAuth.signOut({ postLogoutRedirectUri: basename });
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

    const savedUser = localStorage.getItem("user");


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