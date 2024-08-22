import { useTranslation } from "react-i18next";

const FourthParagraph = () => {
    const { i18n, t } = useTranslation();

    return (
        <div className="absolute top-[59%] left-[53%]">
            <div>
                {t("lowFees")}
                {i18n.language === "en" && t("and")}
            </div>
            <div className="flex justify-center space-x-[16px]">
                <div>{i18n.language === "ru" && t("and")}</div>
                <div className="text-[#d47b28]">{t("fair")}</div>
                <div>{t("gambling")}</div>
            </div>
        </div>
    );
};

export default FourthParagraph;
