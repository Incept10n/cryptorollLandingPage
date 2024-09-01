import { useTranslation } from "react-i18next";
import { assets } from "../../images";
import { useContext } from "react";
import { ApplicationContext } from "../../App";
import { setLanguageCookie } from "../../utils/cookieUtils";

const SwitchLanguageButton = ({ swapBg }: { swapBg?: boolean }) => {
    const { i18n, t } = useTranslation();

    const { isDarkMode } = useContext(ApplicationContext)!;

    const handleChangeLanguage = () => {
        if (i18n.language === "en") {
            i18n.changeLanguage("ru");
            setLanguageCookie("ru");
        } else if (i18n.language === "ru") {
            i18n.changeLanguage("en");
            setLanguageCookie("en");
        }
    };

    return (
        <div>
            {
                <div
                    className="relative
                            sm:w-[102px] sm:h-[35px] w-[90.96px] h-[31.21px] bg-contain
                            flex items-center hover:cursor-pointer"
                    onClick={handleChangeLanguage}
                    style={{
                        backgroundImage:
                            !isDarkMode && swapBg
                                ? `url(${assets.images.switchLanguageFrame.lightMode})`
                                : `url(${assets.images.switchLanguageFrame.darkMode})`,
                    }}
                >
                    <div
                        className={`sm:w-[24px] sm:h-[24px] w-[21.4px] h-[21.4px] 
                                    bg-contain absolute
                                    ${
                                        i18n.language === "en"
                                            ? "sm:left-[12px] left-[8px]"
                                            : "sm:left-[66px] left-[60px] rotate-[360deg]"
                                    }
                                    transition-all duration-[0.5s] ease-out`}
                        style={{
                            backgroundImage:
                                !isDarkMode && swapBg
                                    ? `url(${assets.icons.world.lightMode})`
                                    : `url(${assets.icons.world.darkMode})`,
                        }}
                    />
                    <div
                        className={`absolute monoPtFont select-none sm:text-[1em] text-[12px]
                                   ${
                                       i18n.language === "en"
                                           ? "sm:left-[56px] left-[50px]"
                                           : "sm:left-[12px] left-[8px]"
                                   }
                                   ${!isDarkMode && swapBg ? "cryptorollDarkText" : "cryptorollWhiteText"}
                                   transition-all duration-[0.5s] ease-out`}
                    >
                        {t("currentLanguage")}
                    </div>
                </div>
            }
        </div>
    );
};

export default SwitchLanguageButton;
