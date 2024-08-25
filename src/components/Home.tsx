import { Dispatch, SetStateAction } from "react";
import Hero from "./homeComponents/Hero";
import PhrasesSection from "./homeComponents/PhrasesSection";
import InformationalParagraphs from "./homeComponents/InformationalParagraphs";

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
            {
                // <Roadmap />
                // <Faq />
                // <Footer />
            }
        </>
    );
};

export default Home;
