import { useTranslation } from "react-i18next";

const SecondParagraph = () => {
    const { t } = useTranslation();

    return (
        <div className="absolute top-[35%] left-[43%]">
            <div className="flex justify-center space-x-[16px]">
                <div className="text-[#d47b28]">{t("bonuses")}</div>
                <div>{t("forNft")}</div>
            </div>
            <div>{t("holdingAndMore")}</div>
        </div>
    );
};

export default SecondParagraph;
