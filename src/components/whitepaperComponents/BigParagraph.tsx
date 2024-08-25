const BigParagraph = ({ header, text }: { header: string; text: string }) => {
    return (
        <div className="mt-[60px]">
            <h1 className="cryptorollOrangeText t-[20px]">{header}</h1>
            <p className="monoPtFont text-[20px] leading-[19.78px]">{text}</p>
        </div>
    );
};

export default BigParagraph;
