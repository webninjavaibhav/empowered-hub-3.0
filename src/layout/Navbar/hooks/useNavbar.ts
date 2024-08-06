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
    const logout = async () => {
        localStorage.clear();
        sessionStorage.clear();
        try {
            await oktaAuth.closeSession()
        } catch (err) {
            toast.error(JSON.stringify(err));
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