import { Dispatch, SetStateAction } from "react";
import WhitepaperHeader from "./whitepaperComponents/WhitepaperHeader";

const Whitepaper = ({
    setIsDarkMode,
}: {
    setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}) => {
    return <WhitepaperHeader setIsDarkMode={setIsDarkMode} />;
};

export default Whitepaper;
