const CoursesCard = ({ courseInfo }) => {
  return (
    <div className="shadow-xl w-96 border-b-2 rounded-xl group duration-1000 overflow-hidden">
      <div className="card w-full h-full">
        <div className="relative min-h-[40%]  object-contain overflow-hidden bg-cover bg-no-repeat">
          <img
            src="https://img.freepik.com/free-photo/circuit-cyberspace-closeup-with-neon-lights_90220-1200.jpg?w=740&t=st=1686137683~exp=1686138283~hmac=6bc9029cb00fd30a82b4e83b50f5178b7cb0c8fef0adaf127b05869d8a777a6d"
            className="min-w-full object-cover h-60 transition duration-300 ease-in group-hover:scale-x-110"
          ></img>
        </div>
        <div className="card-body">
          <h2 className="card-title text-lg font-bold mb-1">
            Lorem ipsum dolor sit amet.
          </h2>
          <div className=" ">
            <p>Instructors by Sheik sohag</p>
            <h1 className="text-2xl text-orange-400 font-medium opacity-80">
              {/* $ {price} */} 500
            </h1>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs">Review</p>
          </div>
          <div className="w-full mt-6 flex justify-end">
            <button className="btn btn-primary">Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
