import "@/components/layout/layout.scss";
import Image from "next/image";

const ExploreTeam = () => {
  return (
    <div className="wrapper_section">
      <div className="explore_team_container">
        <div className="explore_team_contents_wrapper">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "47px" }}
          >
            <h2>The Team is Here</h2>
            <p>
              In this nationwide educational network, all of them are working as
              a single team but in a hierarchy - serving in different posts like
              Directors, Regional / Zonal Managers, Heads of Departments, Zonal
              Co Ordinators, Principals, Teachers and so on. All these positions
              are only for the smooth functioning of the system. Inside the team
              everyone knows each other by their position, but externally we all
              are only family
            </p>
          </div>
          <div>
         <p>
  members; individually known as &apos;Yesian&apos; and collectively &apos;YES
  Team&apos; captained by a visionary ardent Founder Mr. Shaukath
  Bukhari. <br /> Actually, total team members are 875. Among them, some
  faces are introduced here specially, considering their sacrifice
  to work out of their birth state to ensure their service
  around-the-clock. They are ordered here based on the seniority in
  joining the mission; No position is mentioned with the names.
  Let&apos;s have a look at them.
</p>
          </div>
        </div>
        <div className="explore_team_img_wrapper">
          <Image
            src="/team_photo.png"
            alt="team-photo"
            width={1200}
            height={540}
            priority
          />
        <div className="explore_btn">
          <button><p>Explore Our Team</p> <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26 12L1.5 12M26 12L15.5 22.5M26 12L15.5 1.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</button>
        </div>
        </div>


      </div>
    </div>
  );
};

export default ExploreTeam;
