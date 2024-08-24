import { useContext } from "react";
import { ApplicationContext } from "../../../App";
import RoadmapInfo from "./RoadmapInfo";
import { useTranslation } from "react-i18next";

const RoadmapRoadXdxd = ({
    isRoadmapExtended,
}: {
    isRoadmapExtended: boolean;
}) => {
    const { t } = useTranslation();
    const { isDarkMode } = useContext(ApplicationContext)!;

    return (
        <div
            className={`mt-[390px] transition-transform duration-[0.3s] ease-in-out
                        ${isRoadmapExtended ? "translate-x-[-16%]" : "translate-x-0"}`}
        >
            <div
                className={`w-[2200px] h-[400px] relative bg-no-repeat bg-contain
                            ${
                                isDarkMode
                                    ? "bg-[url(/roadmapImages/roadmapLineDarkMode.svg)]"
                                    : "bg-[url(/roadmapImages/roadmapLineLightMode.svg)]"
                            }`}
            >
                <RoadmapInfo
                    position={{ top: -40, left: 11.8 }}
                    header={t("launchNftHeader")}
                    date={t("launchNftDate")}
                    text={t("launchNftText")}
                    isUpper={true}
                />
                <RoadmapInfo
                    position={{ top: 80.45, left: 26.75 }}
                    header={t("launchAppHeader")}
                    date={t("launchAppDate")}
                    text={t("launchAppText")}
                    isUpper={false}
                />
                <RoadmapInfo
                    position={{ top: -40, left: 42.25 }}
                    header={t("launchStakingHeader")}
                    date={t("launchStakingDate")}
                    text={t("launchStakingText")}
                    isUpper={true}
                />
                <RoadmapInfo
                    position={{ top: 80.45, left: 58.84 }}
                    header={t("launchTokenHeader")}
                    date={t("launchTokenDate")}
                    text={t("launchTokenText")}
                    isUpper={false}
                />
                <RoadmapInfo
                    position={{ top: -39.7, left: 71.25 }}
                    header={t("tokenListingHeader")}
                    date={t("tokenListingDate")}
                    text={t("tokenListingText")}
                    isUpper={true}
                />
            </div>
        </div>
    );
};

export default RoadmapRoadXdxd;
