/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "B.Tech Student | Motivated IT Professional Seeking Internship in Tech Industry | Proficient in C, C++, Java, Python | Hands-On Web Development Experience";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Programming Languages: Proficient In C, C++, Java, And Python.",
  "Web Development: HTML5, CSS3, JavaScript.",
  "Backend Development: Flask (Python), RESTful APIs.",
  "Artificial Intelligence: Basic Understanding of AI Concepts.",
  "Data Structures And Algorithms.",
  "Database Management: MySQL.",
  "Operating Systems: Windows, Linux.",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Proficient in C, C++, Java, and Python, delivering high-quality codebases and creating visually appealing web applications using HTML5, CSS3, and JavaScript. Skilled in database management with MySQL and possess foundational knowledge in Al concepts. Expertise includes strong problem-solving skills, effective communication, and the ability to adapt quickly to new technologies. Committed to quality work, seeking to leverage skills in a dynamic professional environment for mutual growth.";
const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
