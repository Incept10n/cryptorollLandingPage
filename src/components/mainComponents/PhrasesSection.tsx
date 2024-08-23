import FirstParagraph from "./phrasesSectionComponents/FirstParagraph";
import SecondParagraph from "./phrasesSectionComponents/SecondParagraph";
import ThirdParagraph from "./phrasesSectionComponents/ThirdParagraph";
import FourthParagraph from "./phrasesSectionComponents/FourthParagraph";
import FifthParagraph from "./phrasesSectionComponents/FifthParagraph";
import ParticleSpawner from "./phrasesSectionComponents/particles/ParticleSpawner";

const PhrasesSection = () => {
    return (
        <div className="h-[150vh] flex justify-center items-center relative">
            <div
                className="bg-[url(/phrasesBackground.svg)] bg-contain bg-no-repeat bg-center
                            w-[80%] h-[872px]"
            />
            <ParticleSpawner left={35} top={10} width={400} height={500} />
            <ParticleSpawner left={10} top={15} width={1400} height={400} />
            <ParticleSpawner left={20} top={30} width={1400} height={200} />
            <ParticleSpawner left={10} top={40} width={1400} height={300} />
            <ParticleSpawner left={30} top={50} width={1000} height={300} />
            <ParticleSpawner left={8} top={60} width={1400} height={300} />
            <ParticleSpawner left={35} top={55} width={400} height={500} />
            <div className="text-[32px] font-[500] cryptorollWhiteText text-center leading-[31.65px]">
                <FirstParagraph />
                <SecondParagraph />
                <ThirdParagraph />
                <FourthParagraph />
                <FifthParagraph />
            </div>
        </div>
    );
};

export default PhrasesSection;
