import bg from "../../../../assets/bg/world.svg";
import { toast } from "react-toastify";
const About = () => {
  // handle message send
  const handleSendMessage = (e) => {
    e.preventDefault();

    toast.success("Message send successful !!");
  };
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),url('${bg}')`,
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
          <p className="text-info text-sm mt-1 mb-2">Contact us any query</p>
          <hr className="max-w-xs" />
          <h1 className="text-lg font-bold mt-2">
            Welcome to Fluency Mastery! We are a dedicated team passionate about
            helping individuals improve their language fluency.
          </h1>
          <p>
            At Fluency Mastery, we offer a wide range of language courses
            tailored to meet the needs of learners at different proficiency
            levels. Whether you are a beginner or an advanced learner, our
            courses are designed to help you enhance your speaking, writing,
            reading, and listening skills
          </p>
          <p className="font-bold text-lg">
            You can contact us through the following methods:
          </p>
          <ul>
            <li>Phone: +1-123-456-7890</li>
            <li>Email: info@fluencymastery.com</li>
            <li>Address: 1234 Main Street, City, Country</li>
          </ul>
        </div>
        <div className="w-full flex flex-col">
          <form
            onSubmit={handleSendMessage}
            className="bg-[#2b0d3f] bg-opacity-60 flex rounded-md flex-col gap-3 backdrop-blur-xl p-8 w-full"
          >
            <div className="w-full">
              <input
                type="text"
                name="name"
                className="input w-full input-border"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <textarea
                className="textarea w-full textarea-bordered"
                name="message"
                id=""
                cols="30"
                placeholder="Enter your message"
                rows="5"
                required
              ></textarea>
            </div>
            <div className="w-full">
              <button type="submit" className="btn w-full btn-sm btn-info">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
