import { useOktaAuth } from "@okta/okta-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../redux/hooks";


const useAuth = () => {
    const navigation = useNavigate();
    const { authState } = useOktaAuth();
    const { user: userProfile } = useAppSelector((state) => state.profile);
    const [userRole, setUserRole] = useState(localStorage.getItem('userRole') || "")

    // comment for now 
    const handleSetUser = (role: string) => {
        localStorage.setItem('userRole', role);
        setUserRole(role)
    }

    useEffect(() => {
        if (authState?.isAuthenticated === false) {
            navigation("/login");
        }
    }, [authState]);

    return {
        isAuthenticated: authState?.isAuthenticated ? true : false,
        userRole,
        userProfile,
        profileBuilderStep: userProfile?.LastName.split('_')?.[1] ?? 'completed',
        navigation,
        handleSetUser,
    }
}

export default useAuth;