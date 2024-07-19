import { useEffect, useState } from "react";
import { quotes, UserSignUpProps } from "../constants";
import { END_POINTS } from "../../../../services/endpoints";


const useSignUp = () => {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);


    const handleSignUp = async (values: UserSignUpProps) => {
        values["User_Role"] = "user"
        values["User_County"] = "state"
        values["User_Country"] = "united state"

        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(`${END_POINTS.OKTA_BASE_URL}api/v1/users`, {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `SSWS ${END_POINTS.OKTA_AUTH_TOKEN}`,
                },
            });

            console.log('response', response);
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