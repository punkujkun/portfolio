/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/image.png";
/*
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "10 Things To Know About Azure Static Web Apps 🎉",
    description:
      "Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "Web Development for Beginners",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section
      className="padding"
      id="portfolio"
      style={{
        position: "relative", // Enable positioning for the background image
        overflow: "hidden", // Prevent the image from overflowing
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `linear-gradient(rgba(18, 18, 18, 0.8), rgba(18, 18, 18, 0.8)), url(${image})`, // Dark overlay with the image
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1, // Push the image behind the content
        }}
      ></div>

      {/* Content */}
      <h2 style={{ textAlign: "center", color: "#E0E0E0" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "column", paddingTop: "3rem" }}>
        <div className="container" style={{ color: "#E0E0E0" }}>
          {projectList.map((project) => (
            <div
              className="box"
              key={project.title}
              style={{
                backgroundColor: "#2A2A40", // Darker box background
                color: "#E0E0E0", // Light text
                marginBottom: "1.5rem", // Add spacing between boxes
                padding: "1rem",
                borderRadius: "8px", // Rounded corners for the boxes
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Subtle shadow for the boxes
              }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#4ECCA3" }}
              >
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
