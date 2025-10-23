import Image from "next/image";
import React from "react";

// Define the expected structure of the state prop (optional but recommended)
interface StateData {
  name: string;
  mapImage: string;
  bannerImage: string;
  demographics: {
    details: { label: string; value: string }[];
    religion: { label: string; value: string }[];
  };
  accessEducation: {
    enrollment: { label: string; value: string }[];
    higher: { label: string; value: string }[];
  };
  educational: {
    title: string;
    data: { label: string; value: string }[];
  }[];
}

// Fix: Accept a single `state` object prop
const StateCard = ({ state }: { state: StateData }) => {
  return (
    <div className="state_demographics_wrapper">
      {/* LEFT COLUMN */}
      <div className="demographics_left">
        <div className="state_map_container">
          <div className="map_placeholder">
            <Image
              src={state.mapImage}
              alt={`${state.name} map`}
              width={319}
              height={237}
              priority
            />
          </div>

          <div className="state_label">
            <h2>{state.name}</h2>
          </div>

          <div className="state_academy">
            <Image
              src={state.bannerImage}
              alt={`${state.name} banner`}
              width={319}
              height={237}
              priority
            />
          </div>
        </div>

        {/* ACCESS TO EDUCATION */}
        <div className="access_education_table">
          <div className="table_header">
            <h3>ACCESS TO EDUCATION</h3>
          </div>

          {/* School Enrollment */}
          <div className="section_content">
            <div className="section_header">
              <p>School Enrollment Ratio</p>
            </div>
            <table>
              <tbody>
                {state.accessEducation.enrollment.map((item, index) => (
                  <tr key={index}>
                    <td>{item.label}</td>
                    <td>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Higher Education */}
          <div className="section_content">
            <div className="section_header">
              <p>Higher Education</p>
            </div>
            <table>
              <tbody>
                {state.accessEducation.higher.map((item, index) => (
                  <tr key={index}>
                    <td>{item.label}</td>
                    <td>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="demographics_right">
        {/* Demographic Details */}
        <div className="demographics_table">
          <div className="table_header">
            <h3>DEMOGRAPHIC DETAILS</h3>
          </div>

          <div className="section_content">
            <table>
              <tbody>
                {state.demographics.details.map((item, index) => (
                  <tr key={index}>
                    <td>{item.label}</td>
                    <td>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Population by Religion */}
          <div className="section_content">
            <div className="section_header">
              <p>Population by Religion</p>
            </div>
            <table>
              <tbody>
                {state.demographics.religion.map((item, index) => (
                  <tr key={index}>
                    <td>{item.label}</td>
                    <td>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Educational Facilities */}
        <div className="educational_facilities_table">
          <div className="table_header">
            <h3>EDUCATIONAL FACILITIES</h3>
          </div>

          {state.educational.map((section, sIndex) => (
            <div className="section_content" key={sIndex}>
              <div className="section_header">
                <p>{section.title}</p>
              </div>
              <table>
                <tbody>
                  {section.data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.label}</td>
                      <td>{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StateCard;

