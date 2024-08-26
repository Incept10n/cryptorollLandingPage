import { Dispatch, SetStateAction, useContext, useState } from "react";
import { ApplicationContext } from "../../../App";

const ScrollRightButton = ({
    isRoadmapExtended,
    setIsRoadmapExtended,
}: {
    isRoadmapExtended: boolean;
    setIsRoadmapExtended: Dispatch<SetStateAction<boolean>>;
}) => {
    const { isDarkMode } = useContext(ApplicationContext)!;

    const [isButtonHovered, setIsButtonHovered] = useState(false);

    return (
        <div
            className={`right-[2%] bottom-[10%] absolute
                            w-[140px] h-[140px] bg-contain bg-no-repeat
                            flex justify-end items-center hover:cursor-pointer
                            transition-all duration-[0.3s] ease-in
                            ${isRoadmapExtended ? "rotate-[-180deg]" : "rotate-0"}
                            ${
                                isDarkMode
                                    ? "bg-[url(/roadmapImages/arrowDarkMode.svg)]"
                                    : "bg-[url(/roadmapImages/arrowLightMode.svg)]"
                            }`}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            onClick={() => setIsRoadmapExtended((prevState) => !prevState)}
        >
            <div
                className={`
                            ${isDarkMode ? "cryptorollBlackBg" : "cryptorollBlackBg"}
                            ${isButtonHovered ? "opacity-[0.4]" : "opacity-0"}
                            w-[80%] h-[80%] rounded-full absolute right-[-14%]
                            transition-all duration-[0.2s] ease-in-out`}
            />
        </div>
    );
};

export default ScrollRightButton;
