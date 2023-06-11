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
        "http://localhost:5000/users/instructors/popular"
      );
      return res.data;
    },
  });

  return (
    <section className="mb-20">
      <SectionTitle
        subTitle="Limitless learning, more possibilities"
        title="Popular Instructors"
        center={false}
      />
      {instructorLoading ? (
        <Spinner />
      ) : (
        <div className="default-container px-6 md:px-0 grid-cols-1 md:grid-cols-2 grid gap-12">
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
