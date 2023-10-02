import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@smastrom/react-rating/style.css";

import "./review.css";
import { Pagination, Navigation } from "swiper";
import { clientReviews } from "./clientRevieObj";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const StudentReview = () => {
  return (
    <div className="review bg-transparent my-12">
      <SectionTitle subTitle="What student say" title="Student Review" />
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {clientReviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="w-full h-[40vh] flex gap-3 items-center justify-center flex-col">
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
