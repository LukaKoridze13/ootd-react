import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import VideoUI from "./VideoUI";
const HomePage = () => {
  return (
    <Swiper direction="vertical" slidesPerView={1} resistanceRatio={0}>
      <SwiperSlide>
        <VideoUI />
      </SwiperSlide>
    </Swiper>
  );
};

export default HomePage;
