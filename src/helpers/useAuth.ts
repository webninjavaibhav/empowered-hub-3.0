import axios from "axios";
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

    const getSalesforceAccessToken = async (id: string) => {
        try {
            const token = await axios.get(`${import.meta.env.VITE_BACKEND_BASEURL}get-token/getToken`);
            const contact = await axios.get(
                `${import.meta.env.VITE_BACKEND_BASEURL}contact/getContact/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token.data.access_token}`,
                    },
                }
            );
            localStorage.setItem('salesforceToken', token.data.access_token);
            localStorage.setItem('userProfile', JSON.stringify(contact));
        } catch (error) {
            console.error("Error fetching Salesforce token:", error);
        }
    }

    useEffect(() => {
        if (authState?.isAuthenticated === false) {
            navigation("/login");
        }
        if (profileBuilder) {
            localStorage.setItem("isNewUser", "true");
            setNewUser("true");
        }
        if (authState?.idToken?.claims?.sub) {
            getSalesforceAccessToken(authState?.idToken?.claims?.sub)
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