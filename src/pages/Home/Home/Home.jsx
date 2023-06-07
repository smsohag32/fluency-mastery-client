import HeaderBanner from "../../../components/Banner/HeaderBanner/HeaderBanner";
import PopularInstructors from "../Popular Instructors/PopularInstructors";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
  return (
    <div>
      <HeaderBanner />
      <PopularClasses />
      <PopularInstructors />
    </div>
  );
};

export default Home;
