import image from "../../../assets/bg/tech.png";
import image2 from "../../../assets/teaching/learn3.webp";

const WhyLearn = () => {
  return (
    <div className="py-16 overflow-hidden relative">
      <div className="default-container">
        <h1 className="text-[2rem] font-semibold text-center max-w-2xl mx-auto">
          Why Learn a Language with Fluency<span className="text-primary">Mastery</span>
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 mt-12">
        <div className="w-full flex flex-col items-center justify-center">
          <img
            src={image2}
            alt="Language Learning"
            className="w-[60%] transition-all -ml-20 -mb-16 opacity-40 z-10 duration-300 hover:rotate-0 -rotate-1"
          />
          <img
            src={image}
            alt="Language Learning"
            className="w-[60%] h-60 object-cover transition-all ring-2 ring-green-400 z-50 duration-300 hover:rotate-0 rotate-3"
          />

          <img
            src={image2}
            alt="Language Learning"
            className="w-[60%] transition-all -mr-20  opacity-40 -mt-16  z-10 duration-300 hover:rotate-0 "
          />
        </div>
        <div className="w-full">
          <h2 className="text-2xl font-semibold mb-4">The FluencyMastery Advantage</h2>
          <article className="text-lg leading-relaxed">
            <p>
              Learning a new language can be an incredibly rewarding journey, and at FluencyMastery, we are committed to
              making this experience both effective and enjoyable.
            </p>
            <p className="mt-4">Here are some reasons why you should consider learning with us:</p>
            <ul className="list-disc list-inside mt-4">
              <li>
                <strong>Expert Guidance:</strong> Our instructors are experienced linguists who provide personalized
                guidance tailored to your learning style and goals.
              </li>
              <li>
                <strong>Comprehensive Curriculum:</strong> We offer a structured curriculum that covers all aspects of
                language learning—grammar, vocabulary, conversation, and cultural nuances.
              </li>
              <li>
                <strong>Interactive Learning:</strong> Engage in interactive lessons and immersive activities that
                foster real-world language skills.
              </li>
              <li>
                <strong>Flexibility:</strong> Learn at your own pace with flexible schedules and convenient online
                classes.
              </li>
              <li>
                <strong>Supportive Community:</strong> Join a vibrant community of language enthusiasts, where you can
                practice with peers and gain cultural insights.
              </li>
            </ul>
            <p className="mt-6">
              Whether you are a beginner or looking to enhance your proficiency, FluencyMastery equips you with the
              tools and confidence to navigate a new language effectively.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default WhyLearn;
