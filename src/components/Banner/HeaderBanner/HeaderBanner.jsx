import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./headerBanner.css";

import img1 from "../../../assets/teaching/teach1.png";
import img2 from "../../../assets/teaching/teach2.png";
import img3 from "../../../assets/teaching/teach3.png";
import { Link } from "react-router-dom";
const HeaderBanner = () => {
  // banner slider information
  const slidersInfo = [
    {
      title: "some thing about",
      img: img1,
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, neque asperiores. Maxime sequi corrupti`,
    },
    {
      title: "some thing about",
      img: img2,
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, neque asperiores. Maxime sequi corrupti`,
    },
    {
      title: "some thing about",
      img: img3,
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, neque asperiores. Maxime sequi corrupti`,
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Autoplay, Pagination]}
        className="mySwiper"
      >
        {slidersInfo.map((slid, index) => (
          <SwiperSlide key={index} className="relative">
            <img className="" src={slid.img} />
            <div className="absolute hero-overlay top-0 left-0 right-0 bottom-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.9)] justify-center">
              <div className="default-container text-white">
                <div className="md:max-w-xl">
                  <h1 className="text-2xl md:text-3xl font-bold uppercase">
                    {slid.title}
                  </h1>
                  <p className="opacity-70 mt-2 mb-8">{slid.description}</p>
                  <Link to="/courses" className="btn btn-info">
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeaderBanner;
