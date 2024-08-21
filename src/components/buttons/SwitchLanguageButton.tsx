import { useTranslation } from "react-i18next";

const SwitchLanguageButton = () => {
    const { i18n, t } = useTranslation();

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
                            bg-[url(/images/LanguageSwitchFrame.svg)] w-[102px] h-[35px] bg-contain
                            flex items-center hover:cursor-pointer"
                    onClick={handleChangeLanguage}
                >
                    <div
                        className={`bg-[url(/images/WorldIcon.svg)] w-[24px] h-[24px] bg-contain absolute
                                    ${i18n.language === "en" ? "left-[12px]" : "left-[66px] rotate-[360deg]"}
                                    transition-all duration-[0.5s] ease-out`}
                    />
                    <div
                        className={`absolute cryptorollWhiteText monoPtFont select-none
                                   ${i18n.language === "en" ? "left-[56px]" : "left-[12px]"}
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
