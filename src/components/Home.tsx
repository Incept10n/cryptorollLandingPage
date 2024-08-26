import { Dispatch, SetStateAction } from "react";
import Hero from "./homeComponents/Hero";
import PhrasesSection from "./homeComponents/PhrasesSection";
import InformationalParagraphs from "./homeComponents/InformationalParagraphs";
import Faq from "./homeComponents/Faq";

const Home = ({
    setIsDarkMode,
}: {
    setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}) => {
    return (
        <>
            <Hero setIsDarkMode={setIsDarkMode} />
            <PhrasesSection />
            <InformationalParagraphs />

            <Faq />
            {
                // <Roadmap />
                // <Footer />
            }
        </>
    );
};

export default Home;
