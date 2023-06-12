import { Helmet } from "react-helmet";
import InstructorCard from "../../components/Card/InstructorCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Spinner from "../../components/Spinner/Spinner";
import useInstructors from "../../hooks/useInstructors";

const Instructors = () => {
  const { instructors, inLoading } = useInstructors();

  if (inLoading) {
    return <Spinner />;
  }
  return (
    <div className="py-12 mb-12">
      <Helmet>
        <title>FluencyMastery | Instructors</title>
      </Helmet>
      <SectionTitle
        title="Meet Our Expert Instructor"
        subTitle="Instructors Who Make Learning Fun"
        center={true}
      ></SectionTitle>

      <div className="default-container px-6 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {instructors?.length > 0 &&
            instructors.map((instructor) => (
              <InstructorCard
                key={instructor._id}
                instructor={instructor}
                setHeight={"h-60"}
              ></InstructorCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
