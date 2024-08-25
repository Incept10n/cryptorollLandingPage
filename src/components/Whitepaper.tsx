import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import WhitepaperHeader from "./whitepaperComponents/WhitepaperHeader";
import WhitepaperText from "./whitepaperComponents/WhitepaperText";
import { useTranslation } from "react-i18next";
import { ApplicationContext } from "../App";

const Whitepaper = ({
    setIsDarkMode,
}: {
    setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}) => {
    const { t } = useTranslation();
    const { isDarkMode } = useContext(ApplicationContext)!;

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <WhitepaperHeader setIsDarkMode={setIsDarkMode} />
            <h1 className="cryptorollOrangeText text-[40px] text-center mt-[60px] mb-[23px]">
                whitepaper
            </h1>
            <WhitepaperText />
            <p
                className={`text-[40px] text-center leading-[39.56px] max-w-[1065px] mx-auto my-[125px]
                            ${isDarkMode ? "cryptorollWhiteText" : "cryptorollDarkText"}`}
            >
                {t("joinUs")}
            </p>
        </>
    );
};

export default Whitepaper;
