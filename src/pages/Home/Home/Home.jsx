import HeaderBanner from "../../../components/Banner/HeaderBanner/HeaderBanner";

import PopularInstructors from "../Popular Instructors/PopularInstructors";
import PopularClasses from "../PopularClasses/PopularClasses";
import About from "./About/About";

const Home = () => {
  return (
    <div>
      <HeaderBanner />
      <PopularClasses />
      <PopularInstructors />
      <About />
    </div>
  );
};

export default Home;
