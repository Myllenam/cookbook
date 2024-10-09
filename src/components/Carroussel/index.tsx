import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Typography } from "@mui/material";

import { data } from "./utils";
import "./style.css";

export const Carroussel = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
    >
      {data.map((item) => (
        <SwiperSlide key={item.id} className="bg-primary-200">
          <div className="flex sm:flex-col">
            <img src={item.image} alt="slider" className="w-[25%] sm:hidden" />
            <div className="w-full flex flex-col items-center justify-evenly p-4">
              <Typography variant="h1" className="!max-w-[450px] text-center text-main-darkBg !font-semiBold">{item.title}</Typography>
              <Typography variant="h4" className="!max-w-[620px] text-center text-main-darkBg" >{item.content}</Typography>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
