const SectionTitle = ({ title, subTitle, center }) => {
  return (
    <div
      className={`default-container border-b-2 py-2 my-12 ${
        center && "text-center"
      }`}
    >
      <div className={`md:max-w-xl ${center && "mx-auto"}`}>
        <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
        <p className="text-secondary text-sm mt-1 mb-2">{subTitle}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
