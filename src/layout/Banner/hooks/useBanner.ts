import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

type BannerProp = {
    id: string;
    title: string;
    description: string;
    link: string;
};

const useBannerRotator = (handleClose: () => void) => {
    const [banners, setBanners] = useState<BannerProp[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handleNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    const handlePrev = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);

    const getBanner = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_BASEURL}notification`);
            const parsedVal: BannerProp[] = await response.json();
            setBanners(parsedVal);
            if (parsedVal.length > 0) {
                handleClose()
            }
        } catch (error) {
            toast.error("Something went wrong!");
        }
    };

    useEffect(() => {
        getBanner();
    }, []);

    useEffect(() => {
        const isValid = banners.length > 0;
        const intervalId: number | undefined = isValid ? window.setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 3000) : undefined;

        return () => {
            if (intervalId !== undefined) {
                clearInterval(intervalId);
            }
        };
    }, [banners]);

    return {
        data: banners.length > 0 ? banners[currentIndex] : null,
        handleNext,
        handlePrev,
        banners,
    };
};

export default useBannerRotator;
