import { Dispatch, SetStateAction, useContext, useState } from "react";
import { ApplicationContext } from "../../App";

const DarkLightModeSwitch = ({
    setIsDarkMode,
}: {
    setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}) => {
    const { isDarkMode } = useContext(ApplicationContext)!;
    const [triggerAnimation, setTriggerAnimation] = useState<boolean>(false);

    const handleToggle = () => {
        setIsDarkMode((prevState) => !prevState);

        setTriggerAnimation(true);
        setTimeout(() => setTriggerAnimation(false), 200);
    };

    return (
        <div className="fixed top-[63px] left-[111px]">
            <div
                className={`${
                    isDarkMode
                        ? "bg-[url(/images/sunLightDarkModeSwitch.svg)] transition-all delay-[100ms]"
                        : "bg-[url(/images/moonLightDarkModeSwitch.svg)] transition-all delay-[100ms]"
                }
                ${triggerAnimation ? "appear" : ""}
                w-[35px] h-[35px] hover:cursor-pointer`}
                onClick={handleToggle}
            ></div>
        </div>
    );
};

export default DarkLightModeSwitch;
