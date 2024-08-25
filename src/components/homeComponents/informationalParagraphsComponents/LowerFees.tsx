import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const LowerFees = () => {
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
                <h1 className="font-[500] text-[40px]">
                    {t("lowerFeesheader")}
                </h1>
                <p className="monoPtFont max-w-[883px] mt-[35px] text-[20px]">
                    {t("lowerFeesParagraph")}
                </p>
            </div>
            <div
                className="absolute left-[20%] top-[25%] w-[74px] h-[74px]
                            bg-[url(/paragraphIcons/zeroPersentIcon.svg)]"
            />
            <div
                className="absolute right-[22%] top-[-13%] w-[58px] h-[58px]
                            bg-[url(/paragraphIcons/moneyInTheBox.svg)]"
            />
            <div
                className="absolute right-[23%] bottom-[-15%] w-[70px] h-[70px]
                            bg-[url(/paragraphIcons/cards.svg)] bg-contain bg-no-repeat"
            />
        </div>
    );
};

export default LowerFees;
