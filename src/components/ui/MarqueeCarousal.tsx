
"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import "./MarqueeCarousal.scss";

const MarqueeCarousal = () => {
  const logos = [
    "/owl_carousal/logos/mathrubhasha.png",
    "/owl_carousal/logos/technorium.png",
    "/owl_carousal/logos/anglorium.png",
    "/owl_carousal/logos/sensorium.png",
    "/owl_carousal/logos/victorium.png",
        "/owl_carousal/logos/mathrubhasha.png", // duplicate for seamless looping
    "/owl_carousal/logos/technorium.png",
    "/owl_carousal/logos/anglorium.png",
  ];

  return (
    <div className="logo_carousel_wrapper">
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        loop={0}
      >
        {logos.map((logo, index) => (
          <div key={index} className="logo_item">
            <Image
              src={logo}
              alt={`logo-${index}`}
              width={160}
              height={80}
              style={{ objectFit: "contain", margin: "0 40px" }}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeCarousal;
