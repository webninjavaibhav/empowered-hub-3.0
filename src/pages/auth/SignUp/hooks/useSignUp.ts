import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { quotes, UserSignUpProps } from "../constants";
import { END_POINTS } from "../../../../services/endpoints";


const useSignUp = () => {
    const navigation = useNavigate();

    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);


    const handleSignUp = async (values: UserSignUpProps) => {
        values["User_Role"] = "user"
        values["User_County"] = "state"
        values["User_Country"] = "united state"
        values["login"] = values.email

        let f1 = {
            "profile": {
                ...values
            }
        }

        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(`${END_POINTS.OKTA_BASE_URL}api/v1/users`, {
                method: "POST",
                body: JSON.stringify(f1),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `SSWS ${END_POINTS.OKTA_AUTH_TOKEN}`,
                },
            });
            const data = await response.json();
            if (data?.errorCauses) {
                alert(data.errorCauses[0].errorSummary)
            } else {
                localStorage.setItem("user_id", data.id)
                localStorage.setItem("user_info", JSON.stringify(data.profile))
                navigation('/home')
            }
        } catch (error) {
            console.log(error, "caught in error ");
            setError(`Error : ${JSON.stringify(error)}`);
        } finally {
            setIsLoading(false);
        }

    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [quotes.length]);


    return {
        handleSignUp,
        isLoading,
        error,
        currentQuoteIndex,
        setCurrentQuoteIndex,
        quotes,
    }
}

export default useSignUp;