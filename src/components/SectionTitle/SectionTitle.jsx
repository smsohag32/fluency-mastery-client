const SectionTitle = ({ title, subTitle }) => {
  return (
    <div>
      <div className="md:max-w-md">
        <p>{subTitle}</p>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default SectionTitle;
