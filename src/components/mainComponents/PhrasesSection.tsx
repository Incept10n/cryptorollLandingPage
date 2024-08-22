import FirstParagraph from "./phrasesSectionComponents/FirstParagraph";
import SecondParagraph from "./phrasesSectionComponents/SecondParagraph";
import ThirdParagraph from "./phrasesSectionComponents/ThirdParagraph";
import FourthParagraph from "./phrasesSectionComponents/FourthParagraph";
import FifthParagraph from "./phrasesSectionComponents/FifthParagraph";

const PhrasesSection = () => {
    return (
        <div className="h-[150vh] flex justify-center items-center relative">
            <div
                className="bg-[url(/phrasesBackground.svg)] bg-contain bg-no-repeat bg-center
                            w-[80%] h-[872px]"
            />
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
