import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div>
      <SectionTitle
        subHeading="From 11:00am to 10:00pm"
        heading="ORDER ONLINE"
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-full object-cover"
            src={slide1}
            alt="Loading Image"
          />
          <p className="text-center text-4xl font-semibold -mt-20 text-white ">
            Salad
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full object-cover"
            src={slide2}
            alt="Loading Image"
          />
          <p className="text-center text-4xl font-semibold -mt-20 text-white ">
            Soups
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full object-cover"
            src={slide3}
            alt="Loading Image"
          />
          <p className="text-center text-4xl font-semibold -mt-20 text-white ">
            pizzas
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full object-cover"
            src={slide4}
            alt="Loading Image"
          />
          <p className="text-center text-4xl font-semibold -mt-20 text-white ">
            desserts
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full object-cover"
            src={slide5}
            alt="Loading Image"
          />
          <p className="text-center text-4xl font-semibold -mt-20 text-white ">
            Salad
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
