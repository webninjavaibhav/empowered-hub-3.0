import { useFormik } from "formik";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type BannerProp = {
    id: string;
    title: string;
    description: string;
    link: string;
}

const useBanner = () => {
    const [banners, setBanners] = useState<BannerProp[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);


    const formik = useFormik({
        initialValues: {
            id: '',
            title: '',
            description: '',
            link: '',
        },
        onSubmit: async (values) => {
            try {
                setIsLoading(true)
                await updateBanner(values);
                await getBanner();
            } catch (error) {
                setIsLoading(false)
            }
        },
        validationSchema: '',
    });


    const getBanner = async () => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_BACKEND_BASEURL}banner`
            );
            const parsedVal = await response.json();
            console.log(parsedVal, "Asdfasdf");
            setBanners(parsedVal);
        } catch (error) {
            toast.error("Something went wrong !");
        }
    };

    const updateBanner = async (values: BannerProp) => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_BACKEND_BASEURL}banner/${values.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                }
            );
            closeModal();
            return await response.json();

        } catch (error) {
            return toast.error("Something went wrong !");
        }
    };

    useEffect(() => {
        getBanner();
    }, [])


    return {
        banners,
        formik,
        isOpen,
        isLoading,
        setIsOpen,
        closeModal,
        openModal
    }
}

export default useBanner;