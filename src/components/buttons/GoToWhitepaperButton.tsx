import { useState } from "react";

const GoToWhitepaperButton = () => {
    const [currentBgColor, setCurrentBgColor] =
        useState<string>("cryptorollOrangeBg");

    return (
        <div
            className="hover:cursor-pointer"
            onMouseEnter={() => setCurrentBgColor("cryptorollOrangeBgBrighter")}
            onMouseLeave={() => setCurrentBgColor("cryptorollOrangeBg")}
        >
            <div
                className={`relative w-[120.44px] h-[33.35px] ${currentBgColor}`}
            >
                <div
                    className={`absolute w-[114.88px] h-[5.56px] ${currentBgColor}
                                left-[50%] -translate-x-[50%] top-[-2.5px]`}
                />
                <div
                    className={`absolute w-[114.88px] h-[5.56px] ${currentBgColor}
                                left-[50%] -translate-x-[50%] bottom-[-2.5px]`}
                />
                <div
                    className={`absolute w-[5.56px] h-[27.79px] ${currentBgColor}
                                top-[50%] -translate-y-[50%] left-[-2.5px]`}
                />
                <div
                    className={`absolute w-[5.56px] h-[27.79px] ${currentBgColor}
                                top-[50%] -translate-y-[50%] right-[-2.5px]`}
                />
                <div
                    className="absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]
                                text-white monoPtFont"
                >
                    Whitepaper
                </div>
            </div>
        </div>
    );
};

export default GoToWhitepaperButton;
