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
        <div className={`mt-[390px]`}>
            <div
                className={`w-[2289px] h-[419px] relative bg-contain bg-no-repeat
                            transition-transform duration-[0.3s] ease-in-out
                            ${
                                isDarkMode
                                    ? "bg-[url(/roadmapImages/finalBgDarkTheme.svg)]"
                                    : "bg-[url(/roadmapImages/finalBgLightTheme-1.svg)]"
                            }`}
                style={{
                    transform: `translateX(-${isRoadmapExtended ? 100 - (window.innerWidth / 2289) * 100 : 0}%)`,
                }}
            >
                <RoadmapInfo
                    position={{ top: -47.8, left: 12.15 }}
                    header={t("launchNftHeader")}
                    date={t("launchNftDate")}
                    text={t("launchNftText")}
                    isUpper={true}
                />
                <RoadmapInfo
                    position={{ top: 98.4, left: 27.66 }}
                    header={t("launchAppHeader")}
                    date={t("launchAppDate")}
                    text={t("launchAppText")}
                    isUpper={false}
                />
                <RoadmapInfo
                    position={{ top: -47.8, left: 43.7 }}
                    header={t("launchStakingHeader")}
                    date={t("launchStakingDate")}
                    text={t("launchStakingText")}
                    isUpper={true}
                />
                <RoadmapInfo
                    position={{ top: 98.4, left: 58.35 }}
                    header={t("launchTokenHeader")}
                    date={t("launchTokenDate")}
                    text={t("launchTokenText")}
                    isUpper={false}
                />
                <RoadmapInfo
                    position={{ top: -47.8, left: 71.42 }}
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
