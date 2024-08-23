import { useContext } from "react";
import LowerFees from "./informationalParagraphsComponents/LowerFees";
import { ApplicationContext } from "../../App";
import Nfts from "./informationalParagraphsComponents/Nfts";
import FairAndTransparent from "./informationalParagraphsComponents/FairAndTransparent";
import Leveraging from "./informationalParagraphsComponents/Leveraging";

const InformationalParagraphs = () => {
    const { isDarkMode } = useContext(ApplicationContext)!;

    return (
        <div
            className={`h-[200vh] space-y-[140px]
                        ${isDarkMode ? "cryptorollWhiteText" : "cryptorollBlackText"}`}
        >
            <LowerFees />
            <Nfts />
            <FairAndTransparent />
            <Leveraging />
        </div>
    );
};

export default InformationalParagraphs;
