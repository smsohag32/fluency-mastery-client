const SectionTitle = ({ title, subTitle, center }) => {
  return (
    <div
      className={`default-container px-5 md:px-2 w-full py-2 text-center my-12 ${
        center && "text-center"
      }`}
    >
      <div className={`md:max-w-xl mx-auto ${center && "mx-auto"} border-b-2`}>
        <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
        <p className="text-primary text-lg md:text-xl mt-1 mb-2">{subTitle}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
