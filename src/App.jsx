/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Pankaj Ojha",
  title: "Software Engineer",
  email: "pnkjojha4@gmail.com",
  gitHub: "https://github.com/punkujkun",
  linkedIn: "https://www.linkedin.com/in/punkujkun/",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#1E1E2F";
const secondaryColor = "#2A2A40";
const accentColor = "#4ECCA3";
const textColor = "#E0E0E0";
const backgroundColor = "#121212";

const App = () => {
  return (
    <div
      id="main"
      style={{
        backgroundColor: backgroundColor, // Set background color for the main container
        color: textColor, // Set text color for the main container
      }}
    >
      <Header primaryColor={primaryColor} textColor={textColor} />
      <Home
        name={siteProps.name}
        title={siteProps.title}
        textColor={textColor}
        accentColor={accentColor}
      />
      <About backgroundColor={secondaryColor} textColor={textColor} accentColor={accentColor} />
      <Portfolio backgroundColor={secondaryColor} textColor={textColor} accentColor={accentColor} />
      <Footer
        {...siteProps}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        textColor={textColor}
      />
    </div>
  );
};

export default App;
