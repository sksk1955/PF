import React from "react";

/**
 * Education list
 *
 * An array of objects that will be used to display your educational
 * qualifications. Below is a sample, update to reflect your actual
 * educational background.
 */
const educationList = [
  {
    degree: "BTech Computer Science",
    institution: "Indian Institute Of Information Technology",
    duration: "2022 - 2026",
  },
  {
    degree: "Intermediate",
    institution: "BML Munjal Green Medows School",
    duration: "2020-2021",
  },
  {
    degree: "High School 10th",
    institution: "BML Munjal Green Medows School",
    duration: "2018-2019",
  },
];

const Education = () => {
  return (
    <section className="padding light" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div className="container">
        <ul className="education-list">
          {educationList.map((education) => (
            <li className="education-item" key={education.degree}>
              <h3>{education.degree}</h3>
              <h4>{education.institution}</h4>
              <p className="small">
                <em>{education.duration}</em>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;
