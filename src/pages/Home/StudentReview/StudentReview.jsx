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
    <div className="review bg-transparent mb-20">
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="w-full flex gap-3 items-center justify-center flex-col">
              <div className="avatar">
                <div className="w-24 ring-2 ring-green-800 rounded-full">
                  <img src={review?.img} className="object-contain" />
                </div>
              </div>
              <h4 className="text-2xl font-bold">{review?.name}</h4>
              <p className="">{review.comment}</p>
              <div className="flex items-center justify-between">
                <span className="flex gap-1 items-center">
                  <span className="text-sm font-bold">{review?.rating}</span>
                  <Rating style={{ maxWidth: 100 }} value={4} readOnly />
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
