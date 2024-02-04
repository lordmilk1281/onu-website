import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

type Props = {};

const Gallery = (props: Props) => {
  return (
    <Swiper
      modules={[Navigation]}
      className="relative aspect-square w-full rounded-xl"
    >
      {imageArray.map((image, index) => (
        <SwiperSlide key={`index-${index}`}>
          <Image
            src={image}
            alt={`index-${index}`}
            fill
            className="-z-10 object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Gallery;

const imageArray = [
  "/gallery/bed.jpg",
  "/gallery/main.webp",
  "/gallery/sub-0.webp",
  "/gallery/sub-1.webp",
  "/gallery/sub-2.webp",
  "/gallery/sub-3.webp",
];
