import { useContext } from "react";
import { ApplicationContext } from "../../../App";
import { assets } from "../../../images";

const Gradient = () => {
    const { isDarkMode } = useContext(ApplicationContext)!;

    return (
        <div>
            <div
                className={`w-[100%] h-[128px] absolute bottom-0 translate-y-[100%]`}
                style={{
                    backgroundImage: `url(${
                        isDarkMode
                            ? assets.images.gradient.darkMode
                            : assets.images.gradient.lightMode
                    })`,
                }}
            ></div>
        </div>
    );
};

export default Gradient;
