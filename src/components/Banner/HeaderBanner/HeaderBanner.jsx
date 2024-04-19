import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./headerBanner.css";

import img1 from "../../../assets/teaching/learn.png";
import img2 from "../../../assets/teaching/learn3.png";
import img3 from "../../../assets/teaching/learn.png";

import img4 from "../../../assets/teaching/learn.webp";
import img5 from "../../../assets/teaching/learn3.webp";
import img6 from "../../../assets/teaching/learn.webp";
import Marquee from "react-fast-marquee";

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

  const learningImage = [
    { id: 1, image: img4 },
    { id: 2, image: img5 },

    { id: 3, image: img6 },

    { id: 4, image: img5 },
  ];
  return (
    <div className="hero bg-black">
      <Swiper
      style={{
        "--swiper-pagination-color": "#30a538",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "16px",
        "--swiper-pagination-bullet-horizontal-gap": "6px"
      }}
      
        spaceBetween={30}
        speed={2500}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Autoplay, Pagination]}
        className="mySwiper">
        {slidersInfo.map((slid, index) => (
          <SwiperSlide
            key={index}
            className="relative">
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)),url('${slid?.img}')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
              }}
              className=" flex items-center w-full">
              <div className="default-container flex flex-col lg:flex-row gap-6 px-8 md:px-4 lg:px-4 text-center lg:text-left text-white">
                <div className=" w-full">
                  <Fade top>
                    <h1 className=" w-full font-extrabold line-clamp-1 text-[3rem]">{slid.title}</h1>
                  </Fade>
                  <Slide top>
                    <p className="opacity-70 leading-10 text-lg md:text-xl mb-8">{slid.description}</p>
                  </Slide>
                  <Fade top>
                    <Link
                      to="/courses"
                      className="px-6  text-white bg-green-600 text-lg font-semibold py-3">
                      Enroll Now
                    </Link>
                  </Fade>
                </div>

                <div className="w-full overflow-hidden">
                  <Marquee>
                    <div className="grid grid-cols-4 mr-5 gap-5">
                      {learningImage.map((item) => (
                        <div
                          className="w-96"
                          key={item?.id}>
                          <img
                            src={item.image}
                            className="object-cover w-80"
                            alt={item?.id}
                          />
                        </div>
                      ))}
                    </div>
                  </Marquee>
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
