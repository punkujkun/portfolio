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
  "Data engineer focused on building reliable data systems to support practical applications.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "ETL Development (Scala, Python, Spark)",
  "Big Data Processing (Spark)",
  "Data Pipeline Design and Implementation",
  "Cloud Computing (Azure, GCP)",
];
/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "As a data engineer with a strong interest in AI, I am passionate about solving problems in new creative ways to drive innovation. By leveraging my data engineering experience, I continually look for new and better ways to make tech accessible by all, particularly through the lens of enabling robust and effective AI applications.";

const About = () => {
  return (
    <section
      className="padding"
      id="about"
      aria-label={imageAltText} // Add this for screen readers
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="background"
        style={{
          backgroundImage: `linear-gradient(rgba(18, 18, 18, 0.8), rgba(18, 18, 18, 0.8)), url(${image})`, // Dark overlay
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: -1,
        }}
      ></div>
      <div
        style={{
          backgroundColor: "#2A2A40", // Darker card background
          color: "#E0E0E0", // Light text
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Subtle shadow
          borderRadius: "8px", // Rounded corners
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
            listStyleType: "none",
            padding: 0,
          }}
        >
          {skillsList.map((skill) => (
            <li
              key={skill}
              style={{
                marginBottom: "1rem",
                position: "relative",
                paddingLeft: "1.5rem",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: "0.25rem",
                  height: "0.75rem",
                  width: "0.75rem",
                  backgroundColor: "#4ECCA3", // Accent color for bullets
                  borderRadius: "50%",
                }}
              ></span>
              {skill}
            </li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "1rem",
          color: "#E0E0E0",
          fontSize: "0.9rem",
        }}
      >
        <em>{imageAltText}</em>
      </div>
    </section>
  );
};

export default About;
