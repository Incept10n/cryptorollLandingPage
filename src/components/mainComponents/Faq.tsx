import AnyQuestions from "./faqComponents/AnyQuestions";
import QuestionsAndAnswers from "./faqComponents/QuestionsAndAnswers";

const Faq = () => {
    return (
        <div className="h-[70vh] flex justify-around items-start pt-[200px]">
            <AnyQuestions />
            <QuestionsAndAnswers />
        </div>
    );
};

export default Faq;
