import bg from "../../../../assets/bg/tech.png";
import { toast } from "react-toastify";
import { Fade } from "react-reveal";
const About = () => {
  // handle message send
  const handleSendMessage = (e) => {
    e.preventDefault();

    toast.success("Message send successful !!");
  };
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1)),url('${bg}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="py-16"
    >
      <div className="flex p-5 default-container px-5 flex-col md:flex-row md:items-center gap-8">
        <div className="w-full text-white text-opacity-90 space-y-2">
          <h1 className="text-2xl md:text-3xl text-white opacity-90 font-bold">
            About us
          </h1>
      
        <div className="mt-10">
        <h1 className="text-lg font-bold ">
            Welcome to Fluency Mastery! We are a dedicated team passionate about
            helping individuals improve their language fluency.
          </h1>
          <p className="mt-4">
            At Fluency Mastery, we offer a wide range of language courses
            tailored to meet the needs of learners at different proficiency
            levels. Whether you are a beginner or an advanced learner, our
            courses are designed to help you enhance your speaking, writing,
            reading, and listening skills
          </p>
          <p className="font-bold text-lg mt-6 mb-2">
            You can contact us through the following methods:
          </p>
          <ul>
            <li>Phone: <span className="font-bold ps-2">+1-123-456-7890</span></li>
            <li>Email: info@fluencymastery.com</li>
            <li>Address: 1234 Main Street, City, Country</li>
          </ul>
        </div>
        </div>
        <Fade right>
          <div className="w-full flex flex-col">
            <form
              onSubmit={handleSendMessage}
              className="
             flex rounded-md flex-col gap-3 backdrop-blur-xl p-8 w-full"
            >
              <div className="w-full">
                <label htmlFor="" className="text-white font-semibold text-lg">Your name <span></span></label>
                <input
                  type="text"
                  name="name"
                  className="input mt-2 bg-gray-600 text-white w-full input-border"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
              <label htmlFor="" className="text-white font-semibold text-lg">Message <span></span></label>
                <textarea
                  className="textarea mt-2 w-full bg-gray-600 text-white textarea-bordered"
                  name="message"
                  id=""
                  cols="30"
                  placeholder="Enter your message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <div className="w-full">
                <button type="submit" className="w-full primary-btn">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
