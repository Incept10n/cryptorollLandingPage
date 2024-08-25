import { Dispatch, SetStateAction } from "react";
import GoBackButton from "./GoBackButton";
import DarkLightModeSwitch from "../buttons/DarkLightModeSwitch";
import SwitchLanguageButton from "../buttons/SwitchLanguageButton";

const WhitepaperHeader = ({
    setIsDarkMode,
}: {
    setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}) => {
    return (
        <header className="pt-[63px] flex justify-between w-[90%] mx-auto">
            <div className="w-[157px] flex justify-between">
                <DarkLightModeSwitch setIsDarkMode={setIsDarkMode} swapBg />
                <SwitchLanguageButton swapBg />
            </div>
            <GoBackButton />
        </header>
    );
};

export default WhitepaperHeader;
