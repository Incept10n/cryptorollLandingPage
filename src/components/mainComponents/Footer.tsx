import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ApplicationContext } from "../../App";

const Footer = () => {
    const { t } = useTranslation();

    const { isDarkMode } = useContext(ApplicationContext)!;

    return (
        <footer className="h-[30vh] flex flex-col items-center">
            <div
                className={`max-w-[920px] text-center text-[20px]
                            ${isDarkMode ? "cryptorollWhiteText" : "cryptorollDarkText"}`}
            >
                <span>{t("footerTextPart1")}</span>
                <span className="cryptorollOrangeText hover:cursor-pointer">
                    {t("whitepaper")}
                </span>
                <span>{t("footerTextPart2")}</span>
            </div>
            <div className="flex space-x-[40px] mt-[20px]">
                <div className="bg-[url(/socialMediaIcons/twitter.svg)] w-[49px] h-[45px]" />
                <div className="bg-[url(/socialMediaIcons/telegram.svg)] w-[49px] h-[45px]" />
                <div className="bg-[url(/socialMediaIcons/vk.svg)] w-[49px] h-[45px]" />
            </div>
        </footer>
    );
};

export default Footer;
