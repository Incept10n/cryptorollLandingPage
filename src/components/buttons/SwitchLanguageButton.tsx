import { useTranslation } from "react-i18next";
import { assets } from "../../images";
import { useContext } from "react";
import { ApplicationContext } from "../../App";

const SwitchLanguageButton = ({ swapBg }: { swapBg?: boolean }) => {
    const { i18n, t } = useTranslation();

    const { isDarkMode } = useContext(ApplicationContext)!;

    const handleChangeLanguage = () => {
        if (i18n.language === "en") {
            i18n.changeLanguage("ru");
        } else if (i18n.language === "ru") {
            i18n.changeLanguage("en");
        }
    };

    return (
        <div>
            {
                <div
                    className="relative
                            w-[102px] h-[35px] bg-contain
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
                        className={`w-[24px] h-[24px] bg-contain absolute
                                    ${i18n.language === "en" ? "left-[12px]" : "left-[66px] rotate-[360deg]"}
                                    transition-all duration-[0.5s] ease-out`}
                        style={{
                            backgroundImage:
                                !isDarkMode && swapBg
                                    ? `url(${assets.icons.world.lightMode})`
                                    : `url(${assets.icons.world.darkMode})`,
                        }}
                    />
                    <div
                        className={`absolute monoPtFont select-none
                                   ${i18n.language === "en" ? "left-[56px]" : "left-[12px]"}
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
