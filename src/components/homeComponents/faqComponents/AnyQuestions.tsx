import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ApplicationContext } from "../../../App";

const AnyQuestions = () => {
    const { t } = useTranslation();
    const { isDarkMode } = useContext(ApplicationContext)!;

    return (
        <div
            className={`${isDarkMode ? "cryptorollWhiteText" : "cryptorollBlackText"}`}
        >
            <h1 className="text-[40px]">{t("anyQuestions")}</h1>
            <p className="monoPtFont text-[20px] w-[438px] leading-[22px]">
                {t("anyQuestionsParagraph")}
            </p>
        </div>
    );
};

export default AnyQuestions;
