import CoursesCard from "../../../components/Card/CoursesCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PopularClasses = () => {
  return (
    <section className="mb-20">
      <SectionTitle
        subTitle="Limitless learning, more possibilities"
        title="Popular Course"
        center={false}
      />
      <div className="default-container">
        <CoursesCard />
      </div>
    </section>
  );
};

export default PopularClasses;
