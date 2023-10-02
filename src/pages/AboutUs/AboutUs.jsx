import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeProvider";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className="">
      <Helmet>
        <title>About | Fluency</title>
      </Helmet>
      <div className={`${isDarkMode ? "bg-gray-100" : "bg-black"} pt-16`}>
        <div className="default-container py-12 px-4">
          <div className="text-center">
            <h1 className="text-3xl font-semibold mb-4">
              About Our Language Learning Academy
            </h1>
            <p className="">
              Welcome to our language learning community. Discover who we are
              and what we stand for.
            </p>
          </div>
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center">
            <div className="max-w-md p-4 md:p-6 mx-auto bg-white rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="">
                At Fluency Mastery, our mission is to empower individuals with
                the skills and confidence to master a foreign language. We
                believe that learning a new language opens doors to endless
                opportunities, and we're here to guide you on your language
                journey. Whether you're preparing for travel, improving your
                career prospects, or simply exploring a new culture, we're here
                to help you achieve your language learning goals.
              </p>
            </div>
            <div className="mt-6 md:mt-0 md:ml-6">
              <img
                src="https://images.unsplash.com/photo-1561089489-f13d5e730d72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                alt="Language Class"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
            <p className="">
              We take a personalized approach to language learning. Our courses
              are designed to cater to learners of all levels, from beginners to
              advanced speakers. With a focus on interactive and immersive
              learning experiences, you'll not only gain proficiency in the
              language but also gain cultural insights that enhance your
              language skills. Our dedicated instructors are native speakers and
              language enthusiasts who provide expert guidance and support
              throughout your journey.
            </p>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Our Community</h2>
            <p className="">
              Join our vibrant language learning community and connect with
              fellow learners from around the world. We believe that language
              learning is not just about mastering grammar and vocabulary; it's
              also about forming connections and embracing diversity. Our
              community events, language exchange programs, and discussion
              forums provide opportunities to practice, interact, and make
              lifelong friends who share your passion for languages.
            </p>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="">
              Have questions or need assistance? Feel free to
              <Link
                to="/contact"
                className="text-blue-600 mr-1 hover:underline"
              >
                contact us
              </Link>
              anytime. We're here to support you on your language learning
              journey and answer any inquiries you may have. Join us in
              mastering foreign languages and unlocking a world of opportunities
              today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
