import AnyQuestions from "./faqComponents/AnyQuestions";
import QuestionsAndAnswers from "./faqComponents/QuestionsAndAnswers";

const Faq = () => {
    return (
        <div className="flex justify-around items-start py-[200px]">
            <AnyQuestions />
            <QuestionsAndAnswers />
        </div>
    );
};

export default Faq;
