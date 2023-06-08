import InstructorCard from "../../../components/Card/InstructorCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PopularInstructors = () => {
  return (
    <section className="mb-20">
      <SectionTitle
        subTitle="Limitless learning, more possibilities"
        title="Popular Instructors"
        center={false}
      />
      <div className="default-container px-6 md:px-0 grid-cols-1 md:grid-cols-2 grid gap-12">
        <InstructorCard />
        <InstructorCard />
      </div>
    </section>
  );
};

export default PopularInstructors;
