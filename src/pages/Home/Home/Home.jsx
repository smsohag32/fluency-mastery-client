import HeaderBanner from "../../../components/Banner/HeaderBanner/HeaderBanner";

import PopularInstructors from "../Popular Instructors/PopularInstructors";
import PopularCourses from "../PopularCourses/PopularCourses";
import StudentReview from "../StudentReview/StudentReview";

import About from "./About/About";
import { Helmet } from "react-helmet";
import OfferBoard from "./OfferBoard/OfferBoard";
import ContactInfo from "./ContactInfo";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Home | Fluency</title>
      </Helmet>
      <HeaderBanner />
      <PopularCourses />
      <OfferBoard />
      <PopularInstructors />
      <StudentReview />
      {/* <About /> */}
      <ContactInfo/>
    </div>
  );
};

export default Home;
