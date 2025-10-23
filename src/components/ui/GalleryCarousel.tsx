// components/GalleryCarousel.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const GalleryCarousel = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const images = [
    { id: 1, src: "/carousal/gallery/carousal_1.png", alt: "Colorful clothing" },
    { id: 2, src: "/carousal/gallery/carousal_2.png", alt: "Book in library" },
    { id: 3, src: "/carousal/gallery/carousal_3.png", alt: "Writing workspace" },
  ];

  return (
    <div className="gallery_wrapper">
     <Swiper
  modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={3}
  loop={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1.5,
    slideShadows: false,
  }}
  pagination={{
    clickable: true,
    el: ".custom-pagination",
  }}
  navigation={{
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  }}
  // ✅ Replace this block here
  onBeforeInit={(swiper) => {
    if (
      swiper.params.navigation &&
      typeof swiper.params.navigation !== "boolean"
    ) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
    }
  }}
  breakpoints={{
    320: { slidesPerView: 1.2, spaceBetween: 16 },
    768: { slidesPerView: 2, spaceBetween: 24 },
    1080: { slidesPerView: 3, spaceBetween: 32 },
  }}
  className="premium_swiper"
>
        {images.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="gallery_slide">
              <Image
                src={item.src}
                alt={item.alt}
                width={386}
                height={484}
                className="gallery_image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Navigation */}
      <div className="gallery_bottom_nav">
        <button ref={prevRef} className="bottom_nav_btn" aria-label="Previous">
          <ChevronLeft size={22} />
        </button>
        <button ref={nextRef} className="bottom_nav_btn active" aria-label="Next">
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Pagination */}
      <div className="custom-pagination"></div>
    </div>
  );
};

export default GalleryCarousel;
