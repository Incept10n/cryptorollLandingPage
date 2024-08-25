const SubParagraph = ({ header, text }: { header: string; text: string }) => {
    return (
        <div className="monoPtFont leading-[22.42px] mb-[1.4em]">
            <h1 className="underline-thin">{header}</h1>
            <p>{text}</p>
        </div>
    );
};

export default SubParagraph;
