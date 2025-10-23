import CardGrid from "@/components/ui/CardGrid";
import Carousal from "@/components/ui/Carousal";
import MarqueeCarousal from "@/components/ui/MarqueeCarousal";
import Image from "next/image";

const about = () => {
const timelineData = [
    { year: "2007", image: "/timeline/2007.jpg" },
    { year: "2008", image: "/timeline/2008.jpg" },
    { year: "2009", image: "/timeline/2009.jpg" },
    { year: "2010", image: "/timeline/2010.jpg" },
    // Add more years as needed
  ];


    const institutions = [
    {
      title: "Yaseen English School",
      image: "/yaseen-school.png" // Update with your actual image path
    },
    {
      title: "YES India Public School",
      image: "/yes-public-school.png"
    },
    {
      title: "EC Yes Pre-life Schools",
      image: "/ec-yes-prelife.png"
    }
  ];

  return (
    <>
      <section className="about_banner_container">
        <div className="about_banner_wrapper">
          <Image
            src="/about_banner.png"
            alt="about_banner"
            width={1600}
            height={750}
            priority
            className="about_banner_image"
          />
          <div className="about_banner_content">
            <h1>
              About <br /> YES India Foundation
            </h1>
          </div>
        </div>
      </section>

      <section className="wrapper_section">
        <div className="about_contents_wrapper">
          <p>
            <span>YES India Foundation</span> is an educational and humanitarian
            initiative, aiming the educational and social uplift of the backward
            communities in India. Shaping the better culture, YES India
            Foundation could become successful, within a short span of time, in
            providing the value-based education through its academic
            institutions. <br /> Currently, it has a huge network of educational
            institutes across India - spread over 8 states of India; namely
            Kerala, Karnataka, Andhra Pradesh, Maharashtra, Rajasthan, Bihar,
            West Bengal and Jammu Kashmir. Recently, around 16000 students are
            beneficiaries of 53 institutes including 8 residential institutes
            under YES India Foundation. As its inception was there, the state of
            Jammu and Kashmir is hosting most of its educational institutions.{" "}
            <br /> For this purpose, YES India Foundation focuses on holistic &
            all-round educational plans - ensuring the quality education to the
            marginalized people, fostering the social leaders through
            residential institutes up to Post Graduate level. <br /> YES India
            Foundation guides them until they can withstand in the current of
            modern world, by offering them the quality-based education,
            scholarships and facilities. <br /> It specially brings up the
            selective talented students by providing all of their needs, to
            shape the leaders too for the society to mould the best of next
            generation.
          </p>
        </div>
      </section>

      <section className="about_carousal_section">
        <MarqueeCarousal />
        <div className="carousal_container"></div>
        <Carousal />
        <CardGrid />
      </section>

      <section className="milestone_section wrapper_section">
        <div>
          <h1>Milestones <br /> of Growth</h1>
          <p>Yearly Progress Since 2007</p>
        </div>
        <div>
          <p>
            From its humble beginnings in 2007 from Poonch, YES India Foundation
            has charted a remarkable path of expansion and progress. Each year
            has brought new achievements whether it&#39;s opening more
            institutes, enhancing infrastructure or launching innovative
            programs. The foundation&#39;s growth is a testament to its
            dedication to making quality education a reality for more students
            across India, year after year. Every milestone marks a step closer
            to a brighter, more educated future, to the tailored goal.
          </p>
        </div>
      </section>

<section className="year_achievement_container">
        <div className="timeline_wrapper">
          <div className="timeline_line"></div>
          <div className="year_cards_wrapper">
            {timelineData.map((item, index) => (
              <div key={item.year} className="timeline_item">
                <div className="timeline_dot"></div>
                <div className="year_label">{item.year}</div>
                <div className="year_card">
                  <Image
                    src={item.image}
                    alt={`Year ${item.year}`}
                    width={280}
                    height={280}
                    className="year_image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* States of Operation Section */}
      <section className="wrapper_section">
        <div className="state_operation_section">
          <div>
            <h1>YES INDIA States <br /> of Operations:</h1>
            <p>Expanding Horizons</p>
          </div>

          <div className="india_map_container">
            <div className="map_wrapper">
              <Image
                src="/india_map.png"
                alt="YES India States of Operation"
                width={600}
                height={700}
                className="india_map"
              />
            </div>
          </div>
        </div>
      </section>

<section className="institutions_types_container">
        <div className="institutions_types_wrapper">
          <h1 className="institutions_heading">
            Types of YES <br /> Institutions
          </h1>

          <div className="institutes_lists_wrapper">
            {institutions.map((institution, index) => (
              <div key={index} className="institution_card">
                <div className="institution_image_wrapper">
                  <Image
                    src={institution.image}
                    alt={institution.title}
                    width={400}
                    height={300}
                    className="institution_image"
                  />
                </div>
                <p>{institution.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="administrative_section wrapper_section">
        <div className="administrative_container">
          <div className="administrative_contents">
            <div
              style={{ height: "446px", width: "593px", background: "#D9D9D9" }}
            ></div>
            <div>
              <h2>The Administrative <br /> Hierarchy</h2>
              <p>
                An effective and cohesive administrative hierarchy forms the
                backbone of YES India Foundation. From top-level directors to
                on-site staff, every member of the administrative team
                contributes to the smooth functioning of the Foundation&#39;s
                educational services. This clear chain of command ensures that
                strategic decisions are effectively implemented, fostering an
                environment of accountability and excellence.
              </p>
            </div>
          </div>

          <div className="administrative_positions_wrapper">
            <div className="position level1">Managing Director</div>

            <div className="group">
              <div className="group-title green">Directorate</div>
              <div className="sub-item">Administration</div>
              <div className="sub-item">Finance</div>
              <div className="sub-item">Academic</div>
              <div className="sub-item">Human Resource</div>
              <div className="sub-item">Public Relation</div>
            </div>

            <div className="position yellow">Regional Manager</div>
            <div className="position orange">Zonal Manager</div>

            <div className="group">
              <div className="sub-item">Zonal CO Human Resource</div>
              <div className="sub-item">Zonal CO ADMIN</div>
              <div className="sub-item">Zonal CO Finance</div>
              <div className="sub-item">Zonal CO Academic</div>
              <div className="sub-item">Zonal CO Public Relation</div>
            </div>

            <div className="position green">Principal</div>
            <div className="position orange-light">Academic Coordinator</div>
            <div className="position peach">Teachers</div>
          </div>
        </div>
      </section>


    </>
  );
};

export default about;
