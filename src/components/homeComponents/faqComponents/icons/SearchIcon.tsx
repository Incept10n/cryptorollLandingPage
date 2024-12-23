import { assets } from "../../../../images";

const SearchIcon = ({ isDarkMode }: { isDarkMode: boolean }) => {
    return (
        <div
            className={`w-[32px] h-[32px] mr-[15px]`}
            style={{
                backgroundImage: `url(${isDarkMode ? assets.icons.search.darkMode : assets.icons.search.lightMode})`,
            }}
        />
    );
};

export default SearchIcon;
