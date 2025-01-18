import React from "react";

// Define the image URL
const image = "https://i.imgur.com/mV8PQxj.gif";

function About() {
  return (
    <div id="about">
      <h1>About</h1>
      <h2>About Me</h2> {/* Adding the missing <h2> */}
      <p>This is some information about me.</p> {/* Adding the missing <p> */}
      <img src={image} alt="I made this" /> {/* Ensure alt text matches the test */}
    </div>
  );
}

export default About;
