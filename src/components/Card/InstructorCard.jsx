const InstructorCard = ({ instructor, setHeight }) => {
  return (
    <div
      className={`hover:scale-y-105 duration-500 transform gap-2 border-x-2 w-full flex items-center ${
        setHeight ? setHeight : "h-full"
      }`}
    >
      <div className="h-full w-full">
        <img className="h-full w-full" src={instructor?.image} alt="doctor" />
      </div>
      <div className="w-full space-y-3 text-end p-5 mb-5">
        <h1 className="font-bold text-xl uppercase">{instructor?.name}</h1>
        <p className="secondary-text">{instructor?.email}</p>
        <p className="secondary-text text-sm">{instructor?.role}</p>
        <button className="btn btn-secondary btn-outline btn-sm">Follow</button>
      </div>
    </div>
  );
};

export default InstructorCard;
