import React from "react";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import resume from  "../../assets/icons/resume-svgrepo-com.svg";
import twitter from "../../assets/icons/twitter.svg";
import CSSTypes from "../../Types";

const styles: CSSTypes = {
  div: {
    display: "flex",
    maxHeight: "100%",
    color: "#bfbfbf",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "100%",
  },
  mainContent: {
    display: "flex",
    fontFamily: "RobotoCondensed",
    fontSize: "2vh",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "75vw",
    marginRight: "7vw",
    marginLeft: "7vw",
  },
  h1: {
    fontFamily: "PlayfairDisplay",
  },
  h2: {
    fontFamily: "OCR A Std, monospace",
    fontSize: "6.0vh",
    marginBottom: "2vh",
    marginTop: "-2vh",
    textShadow: "0 0 0.9vh #bfbfbf",
    animation: "bounce .9s ease infinite alternate",
  },
  
  nameHeader: {
    fontFamily: "PlayfairDisplay",
    fontSize: "9vw",
    textAlign: "center",
    marginBottom: "0",
    width: "100%",
  },
  workLink: {
    textDecoration: "none",
    fontFamily: "Oswald",
    fontSize: "20px",
    color: "#6fbdb5",
  },
  socialLink: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "30px",
    color: "#9c9c9c",
  },
};

const About = () => {
  return (
    <div style={styles.div}>
      <div style={styles.mainContent}>
        <section>
          <h1 style={styles.h1}>Hi! My name is</h1>
          <h2 style={styles.h2}> CALEB OJUKWU</h2>
          <p>
            I am a frontend developer currently living in Winnipeg, Manitoba Canada.
          </p>
          <p>
            I am a recent grad with a bachelor's in computer science, Skilled in SQL, Python, Django, Microsoft office, React, react-native, node.js, vue.js, HTML and CSS.
            I am a proficient communicator interested in delving into projects in the software development space.
            I have strong analytical, interpersonal and collaborative skills. have been working professionally in the food industry for over 3 years, while completing my degree. 
            I am currently seeking a company where I can apply my technical skills to make an immense contribution to its growth and gain intellectual stimulation and exposure that would allow me to thrive in my areas of expertise.

            I look forward to gaining new experience and connecting with people as I begin my journey in IT. In my free time, you can find me either cooking, taking pictures or hiking.
          </p>
          <p>
            I currently work as a Freelane Software developer at  &nbsp; {"   "}
            <a
              href={"https://anomalitech.com/"}
              target={"_blank"}
              rel={"noopener noreferrer"}
              style={styles.workLink}>
              {`  Anomalitech`}
            </a>
            
          </p>
        </section>
        <section>
          <p>
            If you are interested in my professional work you can
            connect with me on LinkedIn or shoot me an email.
          </p>
        </section>
        <section style={styles.socialLink}>
          <a
            href={"https://www.github.com/"}
            target={"_blank"}
            rel={"noopener noreferrer"}
            style={styles.workLink}
          >
            <img height="32" width="32" src={github} alt="Github link" />
          </a>
          <a
            href={"https://www.linkedin.com/in/calebojukwu"}
            target={"_blank"}
            rel={"noopener noreferrer"}
            style={styles.workLink}
          >
            <img height="32" width="32" src={linkedin} alt="Linkedin link" />
          </a>
         
          <a
            href={"https://twitter.com/kaleb_io"}
            target={"_blank"}
            rel={"noopener noreferrer"}
            style={styles.workLink}
          >
            <img height="32" width="32" src={twitter} alt="Twitter link" />
          </a>
          <a
            href={"https://www.medium.com/@nnajiabraham"}
            target={"_blank"}
            rel={"noopener noreferrer"}
            style={styles.workLink}
          >
            <img height="32" width="32" src={resume} alt="Resume link" />
          </a>
        </section>
      </div>
      <section>
        <h3 style={styles.h2}></h3>
      </section>
    </div>
  );
};

export default About;

