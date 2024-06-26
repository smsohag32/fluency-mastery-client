import { useQuery } from "@tanstack/react-query";
import InstructorCard from "../../../components/Card/InstructorCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import axios from "axios";
import Spinner from "../../../components/Spinner/Spinner";

const PopularInstructors = () => {
  const { data: instructors = [], isLoading: instructorLoading } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await axios.get(
        "https://fluencymastery-server.vercel.app/users/instructors/popular"
      );
      return res.data;
    },
  });

  return (
    <section className="mb-10">
      <SectionTitle
        subTitle="Limitless learning, more possibilities"
        title="Our Instructors"
        center={false}
      />
      {instructorLoading ? (
        <Spinner />
      ) : (
        <div className="default-container px-6 md:px-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
          {instructors?.length > 0 &&
            instructors.map((instructor) => (
              <InstructorCard
                key={instructor._id}
                instructor={instructor}
              ></InstructorCard>
            ))}
        </div>
      )}
    </section>
  );
};

export default PopularInstructors;
