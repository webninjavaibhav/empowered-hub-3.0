import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

type BannerProp = {
    id: string;
    title: string;
    description: string;
    link: string;
}

// Sample banner data
const useBannerRotator = () => {
    const [isShow, setIsShow] = useState<boolean>(true)
    const [banners, setBanners] = useState<BannerProp[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleShow = () => setIsShow(false)


    const getBanner = async () => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_BACKEND_BASEURL}banner`
            );
            const parsedVal = await response.json();
            setBanners(parsedVal);
        } catch (error) {
            toast.error("Something went wrong !");
        }
    };


    useEffect(() => {
        getBanner();
    }, []); // Update when data changes

    useEffect(() => {
        const isValid = banners.length > 0 ? true : false;
        const intervalId: any = isValid ? setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 3000) : '';

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, [banners]);

    return {
        data: banners[currentIndex],
        handleShow,
        isShow
    }
};

export default useBannerRotator;
