const PageTitle = ({ title, subTitle }) => {
  return (
    <div className="default-container">
      <div className="text-center border-x-2 mb-8 max-w-lg mx-auto">
        <p className=" mb-1 text-info">{subTitle}</p>
        <h1 className="font-bold md:text-2xl text-xl">{title}</h1>
      </div>
    </div>
  );
};

export default PageTitle;
