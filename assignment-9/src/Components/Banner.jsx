import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
const Banner = () => {
  return (
    <div className="flex justify-center  mt-36 md:mt-14">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          {" "}
          <img
            src="https://i.ibb.co/txNWf02/umbrella-chair-around-swimming-pool.jpg"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/CvVKnVG/beach-chair.jpg"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://i.ibb.co/gvKfGrx/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge.jpg"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://i.ibb.co/LnF3NhM/pexels-pixabay-221457.jpg"
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
