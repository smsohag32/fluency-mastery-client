import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeProvider";
import { Helmet } from "react-helmet";
import About from "../Home/Home/About/About";

const AboutUs = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className="z-50">
      <Helmet>
        <title>About | Fluency</title>
      </Helmet>
      <div className={`${isDarkMode ? "bg-gray-100" : "bg-black"} pt-16`}>
        <div className="default-container py-12 px-4">
          <div className="text-center">
            <h1 className="text-3xl font-semibold mb-4">About Our Language Learning <span className="text-primary">Academy</span></h1>
            <p className="">Welcome to our language learning community. Discover who we are and what we stand for.</p>
          </div>
          <div className="my-12 flex flex-col md:flex-row items-center justify-center">
            <div className="  p-4 md:p-6 bg-white rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Our <span className="text-primary">Mission</span></h2>
              <p className="">
                At Fluency Mastery, our mission is to empower individuals with the skills and confidence to master a
                foreign language. We believe that learning a new language opens doors to endless opportunities, and
                we're here to guide you on Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ad corporis. Velit non neque facilis deserunt eos sed consequuntur fugiat? Illo ea dolore consectetur, repudiandae deserunt deleniti exercitationem dolorum veniam. your language journey. Whether you're preparing for travel, improving your
                career prospects, or simply exploring a new culture, we're here to help you achieve your language
                learning goals.
              </p>
            </div>
          </div>

          <div className="flex flex-col  py-12 gap-6 lg:flex-row">
            <div className=" w-full">
              <h2 className="text-2xl font-semibold mb-4">Our <span className="text-primary">Approach</span></h2>
              <p className="">
                We take a personalized approach to language learning. Our courses are designed to cater to learners of
                all levels, from Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, pariatur voluptatum molestias voluptates quam doloremque voluptatibus ducimus distinctio nesciunt quod Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo exercitationem omnis velit saepe facere quas eveniet minus dolorum, laborum nisi nostrum error illum, quis ad optio! Voluptatem ipsam eveniet et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis debitis vitae, eos vero odit assumenda fugiat nam quaerat quam et magnam impedit earum, quidem expedita amet placeat, voluptate voluptatum maiores. commodi doloribus laudantium dignissimos a! Eaque qui magnam molestiae soluta. beginners to advanced speakers. With a focus on interactive and immersive learning
                experiences, you'll not only gain proficiency in the language but also gain cultural insights that
                enhance your language skills. Our dedicated instructors are native speakers and language enthusiasts who
                provide expert guidance and support throughout your journey.
              </p>
            </div>
            <div className="">
              <img
                src="https://images.unsplash.com/photo-1561089489-f13d5e730d72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                alt="Language Class"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="mt-12 relative  ">
            <div className="bg-green-100 rounded-full z-10 h-80 w-[30%] -left-40   absolute -top-32">
            </div>
           <div className="z-50 lg:sticky ">
           <h2 className="text-2xl font-semibold mb-4 z-50">Our <span className="text-primary">Community</span></h2>
            <p className="">
              Join our vibrant language learning community and connect with fellow learners from around the world. We
              believe that language learning is not just about mastering grammar and vocabulary; it's also about forming
              connections and embracing diversity. Our community events, language exchange programs, and discussion Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis recusandae, modi quis placeat dolores ut vel veniam. Nulla aut dolore exercitationem eius. Eius necessitatibus adipisci laudantium, quia voluptatum optio accusamus!
              forums provide opportunities to practice, interact, and make lifelong friends who share your passion for
              languages.
            </p>
           </div>
          </div>
        </div>
      <div className=" rounded-t-xl overflow-hidden">
      <About about={true}/>
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
