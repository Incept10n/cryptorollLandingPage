import { useTranslation } from "react-i18next";

const FifthParagraph = () => {
    const { i18n, t } = useTranslation();

    return (
        <div className="absolute top-[67%] left-[29%]">
            <div>{t("fastService")}</div>
            <div>{i18n.language === "en" && t("withdrawals")}</div>
            <div className="flex justify-center space-x-[16px]">
                <div>{i18n.language === "ru" && t("withdrawals")}</div>
                <div>{t("with")}</div>
                <div className="text-[#d47b28]">{t("oneClick")}</div>
            </div>
        </div>
    );
};

export default FifthParagraph;
