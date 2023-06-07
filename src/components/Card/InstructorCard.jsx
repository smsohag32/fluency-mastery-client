const InstructorCard = () => {
  return (
    <div className="hover:scale-y-105 duration-500 transform gap-8 border-x-2 w-full flex h-full items-center">
      <div className="h-full w-full">
        <img
          className="h-full w-full"
          src="https://img.freepik.com/free-photo/circuit-cyberspace-closeup-with-neon-lights_90220-1200.jpg?w=740&t=st=1686137683~exp=1686138283~hmac=6bc9029cb00fd30a82b4e83b50f5178b7cb0c8fef0adaf127b05869d8a777a6d"
          alt="doctor"
        />
      </div>
      <div className="w-full space-y-3 p-5 mb-5">
        <h1 className="font-bold text-xl">Name sheik</h1>
        <p className="secondary-text">Classes</p>
        <p className="secondary-text">lorem</p>
        <button className="btn btn-secondary">Read More</button>
      </div>
    </div>
  );
};

export default InstructorCard;
