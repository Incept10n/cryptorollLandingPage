import { Dispatch, SetStateAction } from "react";
import Hero from "./homeComponents/Hero";
import PhrasesSection from "./homeComponents/PhrasesSection";
import InformationalParagraphs from "./homeComponents/InformationalParagraphs";
import Faq from "./homeComponents/Faq";
import Footer from "./homeComponents/Footer";

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
            <Footer />
            {
                // <Roadmap />
            }
        </>
    );
};

export default Home;
