import { alumniData } from "@/utils/alumniData";
import React from "react";

const page = () => {
  return (
    <>
      <section className="wrapper_section">
        <div className="alumni_banner_section">
          <div className="alumni_banner_contents">
            <h1>
              Tailored Careers: <br />
              YES India Alumni
            </h1>
            <div className="button_contanier">
              <button>
                {" "}
                <span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_821_1286"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="18"
                      height="18"
                    >
                      <path
                        d="M1.00033 8.99935C1.00033 13.4174 4.58164 16.9987 8.99968 16.9987C13.4177 16.9987 16.999 13.4174 16.999 8.99935C16.999 4.58131 13.4177 1 8.99968 1C4.58164 0.999999 1.00033 4.58131 1.00033 8.99935Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.4002 7.80078L8.9999 11.4005L12.5996 7.80078"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </mask>
                    <g mask="url(#mask0_821_1286)">
                      <path
                        d="M-2.99707 -1.66602H20.9984V19.6633H-2.99707V-1.66602Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </span>{" "}
                <p>Explore</p>
              </button>
            </div>
            <p>
              The true measure of success for <span>YES India Foundation</span> lies
              in the achievements of its alumni. Our graduates have gone on to
              excel in various fields, including civil services, higher
              education, entrepreneurship and community service. The alumni
              network is a growing community of role models who carry forward
              the values and education they received, making a positive impact
              wherever they go. They will create the nexus of value- based
              leadership over next generation.
            </p>
          </div>
        </div>
      </section>

<section className="wrapper_section">
        <div className="alumni_grid_section">
          <div className="alumni_grid">
            {alumniData.map((alumni, index) => (
              <div key={index} className="alumni_card">
                <div className="alumni_image">
                  {/* Replace with actual image: <img src={alumni.image} alt={alumni.name} /> */}
                  <div className="placeholder_image"></div>
                </div>
                <div className="alumni_info">
                  <h3>{alumni.name}</h3>
                  <p className="position">{alumni.position}</p>
                  {alumni.department && <p className="department">{alumni.department}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
