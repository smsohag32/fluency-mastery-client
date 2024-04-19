const PageTitle = ({ title, subTitle }) => {
  return (
    <div className="default-container px-3 pt-10 pb-5">
      <div className="text-center border-x-2 max-w-lg mx-auto">
        <h1 className="font-bold md:text-2xl text-xl">{title}</h1>
        <p className=" mb-1 text-primary">{subTitle}</p>
      </div>
    </div>
  );
};

export default PageTitle;
