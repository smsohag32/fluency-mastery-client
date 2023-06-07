import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import bg from "../../../../assets/bg/world.svg";
const About = () => {
  // handle message send
  const handleSendMessage = (e) => {
    e.preventDefault();
  };
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),url('${bg}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="pb-20 pt-1"
    >
      <SectionTitle
        title="About us"
        subTitle="Contact us to any query"
        center={true}
      ></SectionTitle>
      <div className="flex default-container flex-col md:flex-row gap-8">
        <div className="w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio
          mollitia eaque dolor molestias, error assumenda itaque beatae in sit.
          Officia cum totam explicabo, perspiciatis beatae vitae voluptatum in
          molestias?
        </div>
        <div className="w-full">
          <form
            onSubmit={handleSendMessage}
            className="bg-slate-100 bg-opacity-60 flex rounded-md flex-col gap-3 backdrop-blur-xl p-8 w-full"
          >
            <div className="w-full">
              <input
                type="text"
                name="name"
                className="input w-full input-border"
                placeholder="Enter your name"
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
              ></textarea>
            </div>
            <div className="text-end">
              <button type="submit" className="btn btn-accent">
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
