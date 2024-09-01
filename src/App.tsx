import "./i18n";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Whitepaper from "./components/Whitepaper";
import {
    getLanguageCookie,
    isDarkModeBrowserCookieCheck,
} from "./utils/cookieUtils";
import { useTranslation } from "react-i18next";

interface ApplicationContextInterface {
    isDarkMode: boolean;
}

export const ApplicationContext = createContext<
    ApplicationContextInterface | undefined
>(undefined);

function App() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(
        isDarkModeBrowserCookieCheck(),
    );
    const { i18n } = useTranslation();

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("cryptorollDarkModeBg");
            document.body.classList.remove("cryptorollWhiteBg");
        } else {
            document.body.classList.add("cryptorollWhiteBg");
            document.body.classList.remove("cryptorollDarkModeBg");
        }

        i18n.changeLanguage(getLanguageCookie());
    }, [isDarkMode]);

    return (
        <ApplicationContext.Provider value={{ isDarkMode }}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Home setIsDarkMode={setIsDarkMode} />}
                    />
                    <Route
                        path="/whitepaper"
                        element={<Whitepaper setIsDarkMode={setIsDarkMode} />}
                    />
                </Routes>
            </BrowserRouter>
        </ApplicationContext.Provider>
    );
}

export default App;
