import HeaderBanner from "../../../components/Banner/HeaderBanner/HeaderBanner";

import PopularInstructors from "../Popular Instructors/PopularInstructors";
import PopularCourses from "../PopularCourses/PopularCourses";

import About from "./About/About";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>FluencyMastery | Home</title>
      </Helmet>
      <HeaderBanner />
      <PopularCourses />
      <PopularInstructors />
      <About />
    </div>
  );
};

export default Home;
