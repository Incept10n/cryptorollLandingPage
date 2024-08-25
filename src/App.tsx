import "./i18n";
import { createContext, useEffect, useState } from "react";
import Hero from "./components/mainComponents/Hero";
import PhrasesSection from "./components/mainComponents/PhrasesSection";
import InformationalParagraphs from "./components/mainComponents/InformationalParagraphs";
import Roadmap from "./components/mainComponents/Roadmap";
import Faq from "./components/mainComponents/Faq";

interface ApplicationContextInterface {
    isDarkMode: boolean;
}

export const ApplicationContext = createContext<
    ApplicationContextInterface | undefined
>(undefined);

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("cryptorollDarkModeBg");
            document.body.classList.remove("cryptorollWhiteBg");
        } else {
            document.body.classList.add("cryptorollWhiteBg");
            document.body.classList.remove("cryptorollDarkModeBg");
        }
    }, [isDarkMode]);

    return (
        <ApplicationContext.Provider value={{ isDarkMode }}>
            <Hero setIsDarkMode={setIsDarkMode} />
            <PhrasesSection />
            <InformationalParagraphs />
            <Roadmap />
            <Faq />
        </ApplicationContext.Provider>
    );
}

export default App;
