// app/gallery/page.tsx
"use client";

import GalleryCarousel from "@/components/ui/GalleryCarousel";



const page = () => {
  return (
    <>
      <section className="gallery_section">
        <GalleryCarousel />
      </section>

      <section className="wrapper_section">
        <div className="gallery_canvas_container"></div>
      </section>
    </>
  );
};

export default page;




