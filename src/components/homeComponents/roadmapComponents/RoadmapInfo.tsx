import { useContext } from "react";
import { ApplicationContext } from "../../../App";

const RoadmapInfo = ({
    position,
    header,
    date,
    text,
    isUpper,
}: {
    position: { top: number; left: number };
    header: string;
    date: string;
    text: string;
    isUpper: boolean;
}) => {
    const { isDarkMode } = useContext(ApplicationContext)!;

    return (
        <div
            className="absolute"
            style={{
                top: `${position.top}%`,
                left: `${position.left}%`,
            }}
        >
            <div
                className={`w-[2px] h-[200px] rounded-full
                            ${isDarkMode ? "cryptorollWhiteBg" : "cryptorollBlackBg"}`}
            />
            <div
                className={`absolute left-[21px] w-[450px]
                             ${isUpper ? "top-0" : "bottom-0"}
                             ${isDarkMode ? "cryptorollWhiteText" : "cryptorollBlackText"}`}
            >
                <h1 className="text-[40px] leading-[39px]">{header}</h1>
                <div className="text-[20px]">{date}</div>
                <p className="monoPtFont">{text}</p>
            </div>
        </div>
    );
};

export default RoadmapInfo;
