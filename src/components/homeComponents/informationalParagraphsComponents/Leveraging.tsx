import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const Leveraging = () => {
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
        <div ref={divRef} className="text-center relative">
            <div className="overflow-hidden">
                <div
                    className={`flex flex-col items-center
                            ${slideLeft ? "translate-x-0" : "translate-x-[110%]"}
                            transition-all duration-[1.2s] ease-in-out`}
                >
                    <h1 className="font-[500] text-[40px] max-w-[916px]">
                        {t("leveragingHeader")}
                    </h1>
                    <p className="monoPtFont max-w-[883px] mt-[35px] text-[20px]">
                        {t("leveragingParagraph")}
                    </p>
                </div>
            </div>
            <div
                className="absolute left-[19%] top-[30%] w-[58px] h-[58px]
                            bg-[url(/paragraphIcons/compass.svg)]"
            />
            <div
                className="absolute right-[19%] bottom-[-20%] w-[90px] h-[90px]
                            bg-[url(/paragraphIcons/rocket.svg)] bg-contain bg-no-repeat"
            />
        </div>
    );
};

export default Leveraging;
