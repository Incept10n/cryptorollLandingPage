import { useTranslation } from "react-i18next";

const FirstParagraph = () => {
    const { t } = useTranslation();

    return (
        <div className="absolute top-[25%] left-[23%]">
            <div className="text-[#d47b28]">{t("noMinimums")}</div>
            <div>{t("anyTime")}</div>
            <div>{t("noLimits")}</div>
        </div>
    );
};

export default FirstParagraph;
