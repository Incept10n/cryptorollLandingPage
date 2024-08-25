import { useTranslation } from "react-i18next";

const CoinWithWriting = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center relative top-[142px] left-[50%] -translate-x-[50%]">
            <img
                src="/money.gif"
                alt="something"
                className="w-[382px] h-[382px]"
            />
            <div className="cryptorollWhiteText text-[20px]">
                {t("entryPhrase")}
            </div>
        </div>
    );
};

export default CoinWithWriting;
