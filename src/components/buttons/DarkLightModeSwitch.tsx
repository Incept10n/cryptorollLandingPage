import { Dispatch, SetStateAction, useContext } from "react";
import { ApplicationContext } from "../../App";

const DarkLightModeSwitch = ({
    setIsDarkMode,
}: {
    setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}) => {
    const { isDarkMode } = useContext(ApplicationContext)!;

    return (
        <div className="fixed top-[63px] left-[111px]">
            <div
                className={`${
                    isDarkMode
                        ? "bg-[url(/images/sunLightDarkModeSwitch.svg)]"
                        : "bg-[url(/images/moonLightDarkModeSwitch.svg)]"
                }
                            w-[35px] h-[35px] hover:cursor-pointer`}
                onClick={() => setIsDarkMode((prevState) => !prevState)}
            ></div>
        </div>
    );
};

export default DarkLightModeSwitch;
