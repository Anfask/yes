

// const HomeBanner = () => {
//   return (
//     <div className="home_banner">
//       <div className="home_banner_content">
//         <h1>
//           A Child Without <br /> Education is Like a <br /> Bird Without Wings
//         </h1>
//       </div>



//       {/* home banner mobile-------------> */}
//       {/* <div className="home_banner_mobile">
// <Image src={"/home_banner.png"} alt="" height={521} width={326} priority/>
//       </div> */}
//     </div>
//   );
// };

// export default HomeBanner;
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HomeBanner = () => {
  const banners = [
    {
      image: "/home_bg_banner1.png",
      text: "A Child Without Education is Like a Bird Without Wings",
    },
    {
      image: "/home_bg_banner2.jpg",
      text: "Empowering the Next Generation Through Knowledge",
    },
    {
      image: "/home_bg_banner3.jpg",
      text: "Education Opens the Door to Freedom and Opportunity",
    },
       {
      image: "/home_bg_banner4.jpg",
      text: "Education Opens the Door to Freedom and Opportunity",
    },
  ];

  return (
    <div className="home_banner">
      {/* Navigation buttons */}
      <div className="banner_nav prev_btn">
        <ChevronLeft size={35} />
      </div>
      <div className="banner_nav next_btn">
        <ChevronRight size={35} />
      </div>

      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".next_btn",
          prevEl: ".prev_btn",
        }}
        pagination={{
          clickable: true,
          el: ".banner_pagination",
        }}
        loop
        className="home_banner_content"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="banner_slide">
              <Image
                src={banner.image}
                alt={`banner-${index}`}
                width={1600}
                height={750}
                priority
              />
              <h1>{banner.text}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Dots */}
      <div className="banner_pagination"></div>
    </div>
  );
};

export default HomeBanner;
