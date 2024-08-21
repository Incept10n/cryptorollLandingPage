import "./i18n";
import { createContext, useState } from "react";
import SwitchLanguageButton from "./components/buttons/SwitchLanguageButton";
import DarkLightModeSwitch from "./components/buttons/DarkLightModeSwitch";

interface ApplicationContextInterface {
    isDarkMode: boolean;
}

export const ApplicationContext = createContext<
    ApplicationContextInterface | undefined
>(undefined);

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    return (
        <ApplicationContext.Provider value={{ isDarkMode }}>
            <DarkLightModeSwitch setIsDarkMode={setIsDarkMode} />
            <SwitchLanguageButton />
            {
                // <div className="cryptorollWhiteText">
                //     <div className="font-[400]">{t("entryPhrase")}</div>
                // </div>
            }
        </ApplicationContext.Provider>
    );
}

export default App;
