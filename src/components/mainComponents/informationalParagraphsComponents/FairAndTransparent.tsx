import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const FairAndTransparent = () => {
    const { t } = useTranslation();

    const divRef = useRef(null);
    const [slideRight, setSlideRight] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setSlideRight(true);
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
        <div ref={divRef} className="text-center relative">
            <div
                className={`flex flex-col items-center
                             ${slideRight ? "translate-x-0" : "translate-x-[-110%]"}
                             transition-all duration-[1.2s] ease-in-out`}
            >
                <h1 className="font-[500] text-[40px] max-w-[916px]">
                    {t("fairAndTransparentHeader")}
                </h1>
                <p className="monoPtFont max-w-[883px] mt-[35px] text-[20px]">
                    {t("fairAndTransparentParagraph")}
                </p>
            </div>
            <div
                className="absolute left-[19%] bottom-[-5%] w-[62px] h-[62px]
                            bg-[url(/paragraphIcons/stockUp.svg)]"
            />
            <div
                className="absolute right-[19%] top-[8%] w-[78px] h-[78px]
                            bg-[url(/paragraphIcons/handShake.svg)]"
            />
        </div>
    );
};

export default FairAndTransparent;
