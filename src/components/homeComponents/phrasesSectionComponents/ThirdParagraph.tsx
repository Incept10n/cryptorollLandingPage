import { useTranslation } from "react-i18next";

const ThirdParagraph = () => {
    const { t } = useTranslation();

    return (
        <div className="absolute top-[44%] left-[28%]">
            <div className="text-[#d47b28]">{t("revolut")}</div>
            <div>{t("row1")}</div>
            <div>{t("row2")}</div>
            <div>{t("row3")}</div>
        </div>
    );
};

export default ThirdParagraph;
