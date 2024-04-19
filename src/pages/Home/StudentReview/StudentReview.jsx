import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";

import "./review.css";
import { Pagination, Navigation } from "swiper";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useReviews from "../../../hooks/useReview";

const StudentReview = () => {
  const { reviews, rLoading } = useReviews();

  if (rLoading) {
    return;
  }
  return (
    <div className="review bg-transparent mb-20 ">
      <div className="lg:-mb-10">
        <SectionTitle
          subTitle=""
          title="What to say our students."
          center={false}
        />
      </div>

      <Swiper
        style={{
          "--swiper-pagination-color": "#30a538",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        pagination={{
          type: "fraction",
        }}
        loop={true}
        speed={2500}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[70vh] max-w-6xl mx-auto lg:h-[50vh]">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="w-full flex gap-3 items-center justify-center flex-col">
              <div className="avatar">
                <div className="w-24 ring-2 ring-green-800 rounded-full">
                  <img
                    src={review?.img}
                    className="object-contain"
                  />
                </div>
              </div>
              <h4 className="text-2xl font-bold">{review?.name}</h4>
              <p className="max-w-2xl">{review.comment}</p>
              <div className="flex items-center justify-between">
                <span className="flex gap-1 items-center">
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={4}
                    readOnly
                  />
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StudentReview;
