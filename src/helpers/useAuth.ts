import { useOktaAuth } from "@okta/okta-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";


const useAuth = () => {
    const navigation = useNavigate();
    const { authState } = useOktaAuth();
    const [searchParams] = useSearchParams();
    const profileBuilder = searchParams.get("profilebuilder");
    const [userRole, setUserRole] = useState(localStorage.getItem('userRole') || "")

    // comment for now 
    const [isNewUser, setNewUser] = useState(localStorage.getItem('isNewUser') || "")

    const handleSetUser = (role: string) => {
        localStorage.setItem('userRole', role);
        setUserRole(role)
    }

    useEffect(() => {
        if (authState?.isAuthenticated === false) {
            navigation("/login");
        }
        if (profileBuilder) {
            localStorage.setItem("isNewUser", "true");
            setNewUser("true");
        }
    }, [authState]);


    return {
        isAuthenticated: authState?.isAuthenticated ? true : false,
        userRole,
        isNewUser: isNewUser === "true",
        navigation,
        handleSetUser,
    }
}

export default useAuth;