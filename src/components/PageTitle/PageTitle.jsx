const PageTitle = ({ title, subTitle }) => {
  return (
    <div className="default-container px-3">
      <div className="text-center border-x-2 mb-8 max-w-lg mx-auto">
        <p className=" mb-1 text-primary">{subTitle}</p>
        <h1 className="font-bold md:text-2xl text-xl">{title}</h1>
      </div>
    </div>
  );
};

export default PageTitle;
