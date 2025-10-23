"use client";
import { campuses } from "@/utils/locationCampus";
import Image from "next/image";
import React, { useState } from "react";
import { PlayCircle, X } from "lucide-react";

const Page = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleVideoClick = (url: string) => {
    setSelectedVideo(url);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  // Convert YouTube watch URLs to embed URLs
  const getEmbedUrl = (url: string) => {
    if (url.includes("youtube.com/watch")) {
      const videoId = url.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes("vimeo.com/")) {
      const videoId = url.split("vimeo.com/")[1]?.split("?")[0];
      return `https://player.vimeo.com/video/${videoId}`;
    }
    return url;
  };

  return (
    <>
      {/* Banner Section */}
      <section className="institutions_banner_container">
        <div className="institutions_banner_wrapper">
          <Image
            src="/about_banner.png"
            alt="about_banner"
            width={1600}
            height={750}
            priority
            className="about_banner_image"
          />
          <div className="institutions_banner_content">
            <h1>
              A Closer Look <br />
              YES India Institutions <br /> Locations & Imagery
            </h1>
          </div>
        </div>
      </section>

      {/* Institutions List Section */}
      <section className="wrapper_section">
        <div className="institutions_listing_container">
          <p>
            {`The Foundation's 42 schools and 11 special learning institutes are
            spread across vibrant campuses, each designed to create a conducive
            learning environment. With state-of-the-art facilities, spacious
            classrooms, and well-equipped resources, these institutions reflect
            the foundation's commitment to quality education. Visuals of these
            campuses, along with their locations, offer a glimpse into the
            environments where students learn, grow and thrive.`}
          </p>
          <div className="campus_grid">
            {campuses.map((campus, i) => (
              <div key={i} className="campus_card">
                <div className="campus_image_wrapper">
                  <Image
                    src={campus.image}
                    alt={campus.location}
                    width={400}
                    height={300}
                    className="campus_image"
                  />
                  {/* Play Button Overlay - Only show if videoUrl exists */}
                  {campus.videoUrl && (
                    <button
                      className="video_play_button"
                      onClick={() => handleVideoClick(campus.videoUrl)}
                      aria-label={`Play video for ${campus.location}`}
                    >
                      <PlayCircle size={64} className="play_icon" />
                    </button>
                  )}
                  {/* Gradient Overlay + Location */}
                  <div className="campus_overlay">
                    <p className="campus_location">{campus.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="video_modal_overlay" onClick={closeVideo}>
          <div className="video_modal_content" onClick={(e) => e.stopPropagation()}>
            <button
              className="video_modal_close"
              onClick={closeVideo}
              aria-label="Close video"
            >
              <X size={32} />
            </button>
            <div className="video_wrapper">
              <iframe
                src={getEmbedUrl(selectedVideo)}
                title="Campus Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="video_iframe"
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .video_modal_overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
        }

        .video_modal_content {
          position: relative;
          width: 100%;
          max-width: 1200px;
          background-color: #000;
          border-radius: 8px;
          overflow: hidden;
        }

        .video_modal_close {
          position: absolute;
          top: -50px;
          right: 0;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          z-index: 10000;
          padding: 10px;
          transition: transform 0.2s;
        }

        .video_modal_close:hover {
          transform: scale(1.1);
        }

        .video_wrapper {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          height: 0;
          overflow: hidden;
        }

        .video_iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        @media (max-width: 768px) {
          .video_modal_close {
            top: -40px;
          }
        }
      `}</style>
    </>
  );
};

export default Page;