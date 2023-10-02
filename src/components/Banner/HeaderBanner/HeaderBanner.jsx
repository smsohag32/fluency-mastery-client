import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./headerBanner.css";

import img1 from "../../../assets/teaching/learn.png";
import img2 from "../../../assets/teaching/learn3.png";
import img3 from "../../../assets/teaching/learn.png";
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-reveal";
const HeaderBanner = () => {
  // banner slider information
  const slidersInfo = [
    {
      title: "Unlock Your Potential",
      img: img1,
      description: `Discover a world of learning opportunities with our immersive courses and expert instructors.`,
    },
    {
      title: "Ignite Your Learning Journey",
      img: img2,
      description: `Embark on a transformative learning experience and unleash your full potential.`,
    },
    {
      title: "Learn, Grow, Succeed",
      img: img3,
      description: `Fuel your personal and professional growth with our dynamic courses and dedicated instructors.`,
    },
  ];

  return (
    <div className="hero">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 3000,
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
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.782), rgba(0, 0, 0, 0.829)),url('${slid?.img}')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
              }}
              className=" flex items-center w-full"
            >
              <div className="default-container px-8 md:px-4 lg:px-4 text-center lg:text-left text-white">
                <div className="">
                  <Fade top>
                    <h1 className="text-3xl md:text-6xl w-full font-extrabold uppercase">
                      {slid.title}
                    </h1>
                  </Fade>
                  <Slide top>
                    <p className="opacity-70 leading-10 text-lg md:text-xl mt-2 mb-8">
                      {slid.description}
                    </p>
                  </Slide>
                  <Fade top>
                    <Link
                      to="/courses"
                      className="primary-btn text-white px-8 py-3"
                    >
                      Enroll Now
                    </Link>
                  </Fade>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeaderBanner;
