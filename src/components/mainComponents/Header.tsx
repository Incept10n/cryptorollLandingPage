import { Dispatch, SetStateAction } from "react";
import DarkLightModeSwitch from "../buttons/DarkLightModeSwitch";
import SwitchLanguageButton from "../buttons/SwitchLanguageButton";
import GoToWhitepaperButton from "../buttons/GoToWhitepaperButton";

const Header = ({
    setIsDarkMode,
}: {
    setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}) => {
    return (
        <div className="pt-[63px] flex justify-between w-[90%] mx-auto">
            <div className="w-[157px] flex justify-between">
                <DarkLightModeSwitch setIsDarkMode={setIsDarkMode} />
                <SwitchLanguageButton />
            </div>
            <GoToWhitepaperButton />
        </div>
    );
};

export default Header;
