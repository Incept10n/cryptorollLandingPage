import { useContext, useState } from "react";
import { ApplicationContext } from "../../../App";
import ExitIcon from "./icons/ExitIcon";
import SearchIcon from "./icons/SearchIcon";

const Question = ({
    question,
    answer,
}: {
    question: string;
    answer: string;
}) => {
    const { isDarkMode } = useContext(ApplicationContext)!;

    const [isAnswerExpanded, setIsAnswerExpanded] = useState(false);

    return (
        <div
            className={`max-w-[705px] space-y-[10px]
                        ${isDarkMode ? "cryptorollWhiteText" : "cryptorollBlackText"}
                        ${isAnswerExpanded ? "mb-[36px]" : "mb-0"}
                        transition-all duration-[0.4s] ease-in-out`}
        >
            <div className="space-y-[10px] hover:cursor-pointer">
                <div
                    className="flex justify-between items-center"
                    onClick={() =>
                        setIsAnswerExpanded((prevState) => !prevState)
                    }
                >
                    <h1 className="text-[20px] ml-[7px]">{question}</h1>
                    {isAnswerExpanded ? (
                        <ExitIcon isDarkMode={isDarkMode} />
                    ) : (
                        <SearchIcon isDarkMode={isDarkMode} />
                    )}
                </div>
                <div
                    className={`w-full h-[1px]
                            ${isDarkMode ? "cryptorollWhiteBg" : "cryptorollDarkBg"}`}
                />
            </div>
            <p
                className={`monoPtFont text-[20px] leading-[22px] ml-[7px] overflow-hidden
                            ${isAnswerExpanded ? "max-h-[202px]" : "max-h-[0px]"}
                            transition-all duration-[0.4s] ease-in-out`}
            >
                {answer}
            </p>
        </div>
    );
};

export default Question;
