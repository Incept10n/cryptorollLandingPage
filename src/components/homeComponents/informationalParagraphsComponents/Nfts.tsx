import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const Nfts = () => {
    const { t } = useTranslation();
    const [slideLeft, setSlideLeft] = useState(false);
    const divRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setSlideLeft(true);
                    }
                });
            },
            {
                threshold: 0.2,
            },
        );

        if (divRef.current) {
            observer.observe(divRef.current);
        }

        return () => {
            if (divRef.current) {
                observer.unobserve(divRef.current);
            }
        };
    }, []);

    return (
        <div ref={divRef} className="text-center relative overflow-hidden">
            <div
                className={`flex flex-col items-center
                            ${slideLeft ? "translate-x-0" : "translate-x-[110%]"}
                            transition-all duration-[1.2s] ease-in-out`}
            >
                <h1 className="font-[500] text-[40px] max-w-[916px]">
                    {t("nftsHeader")}
                </h1>
                <p className="monoPtFont max-w-[883px] mt-[35px] text-[20px]">
                    {t("nftsParagraph")}
                </p>
            </div>
            <div
                className="absolute left-[14%] top-[25%] w-[80px] h-[80px]
                            bg-[url(/paragraphIcons/shieldWithLock.svg)]"
            />
            <div
                className="absolute right-[19%] top-[40%] w-[56px] h-[56px]
                            bg-[url(/paragraphIcons/pictureGallery.svg)]"
            />
            <div
                className="absolute left-[25%] bottom-[-28%] w-[65px] h-[65px]
                            bg-[url(/paragraphIcons/heart.svg)] bg-contain bg-no-repeat"
            />
        </div>
    );
};

export default Nfts;
