import { assets } from "../../../../images";

const ExitIcon = ({ isDarkMode }: { isDarkMode: boolean }) => {
    return (
        <div
            className={`w-[32px] h-[32px] mr-[15px]`}
            style={{
                backgroundImage: `url(${isDarkMode ? assets.icons.exit.darkMode : assets.icons.exit.lightMode})`,
            }}
        />
    );
};

export default ExitIcon;
