import { useTranslation } from "react-i18next";
import RoadmapRoadXdxd from "./roadmapComponents/RoadmapRoadXdxd";
import ScrollRightButton from "./roadmapComponents/ScrollRightButton";
import { useState } from "react";

const Roadmap = () => {
    const { t } = useTranslation();
    const [isRoadmapExtended, setIsRoadmapExtended] = useState(false);

    return (
        <div className="h-[200vh] overflow-hidden relative">
            <h1 className="cryptorollOrangeText text-[40px] text-center">
                {t("roadmap")}
            </h1>
            <RoadmapRoadXdxd isRoadmapExtended={isRoadmapExtended} />
            <ScrollRightButton
                isRoadmapExtended={isRoadmapExtended}
                setIsRoadmapExtended={setIsRoadmapExtended}
            />
        </div>
    );
};

export default Roadmap;
