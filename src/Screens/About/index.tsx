import React from "react";
import github from "../../assets/icons/github.svg";
import me from "../../assets/icons/me.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import pdf from  "../../assets/icons/pdf.svg";
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
    fontSize: "3vh",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "75vw",
    marginRight: "7vw",
    marginLeft: "7vw",
  },
  me: { 
    width: "100%",
    fontFamily: "RobotoCondensed",
    fontSize: "1.4rem",
    marginTop: "-2vh",
    textShadow: "1 0 0.9vh #bfbfbf",
    marginBottom: "20vh",
    color: "black",
    padding: "10px", 
    
    
   },
  h1: {
    fontFamily: "times-regular",
    color: "#464444",
    textDecorationThickness: "0px",
    fontSize: "3.5vh",
  },
  h2: {
    fontFamily: "OCR A Std, monospace",
    fontSize: "6rem",
    marginBottom: "0vh",
    marginTop: "3vh",
    color: "black",
    textShadow: "#2C1C1C",
    animation: "bounce .9s ease infinite alternate",
    fontWeight: "700",
  },
  h3: {
    fontFamily: "OCR A Std, monospace",
    fontSize: "1.9rem",
    marginTop: "-2vh",
    textShadow: "1 0 0.9vh #bfbfbf",
    marginBottom: "70vh",
    color: "#2C1C1C",
    fontWeight: "100",
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
    paddingTop: "50%",
    bottom: "0",

  },

  topnav: {
    display: "flex",
    justifyContent: "right",
    marginTop: "10px",
    marginLeft: "1100px",
    color: "#f2f2f2",
    textAlign: "center",
    padding: "14px 16px",
    textDecoration: "none",
    fontSize: "20px",
    borderBottom: "1px solid #c0c0c0",
    
  },

};

const About = () => {
  return (
    <div style={styles.div}>
      <header>
      <div style={styles.topnav}>
        <a href={"#me"}style={styles.workLink}>
            <img height="30" width="30" src={me} alt="About me" />
          </a>
      </div>
      </header>

      <div style={styles.mainContent}>
        <section>
          <h1 style={styles.h1}>Hi! My name is</h1>
          <h2 style={styles.h2}> Caleb Ojukwu </h2>
          <h3 style={styles.h3}> I am a frontend developer <br/> Currently living in Winnipeg, Manitoba Canada. </h3>
          <div>
            <p>
             </p>
             </div>
          <p id="me" style={styles.me} >
          About me
          <br/><br/>
          I'm a frontend web software developer, i like to design and develop web experiences that people find fun and functional.
            <br/><br/>
           
              My interest in web development began in 2016, I took a web devolopment course and was tasked to build a website. 

            <br/><br/>
            I look forward to gaining new experience and connecting with people as I begin my journey in IT. In my free time, you can find me either cooking, taking pictures or hiking.
          </p>
          <div>
          <p>
          These are the technologies that I've worked with
          </p>
          </div>
         
        </section>
        <section>
          <p>
            If you are interested in my professional work you can
            connect with me on LinkedIn or shoot me an email.
          </p>
        </section>
        <div>
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
            href={"https://drive.google.com/file/d/1khTYJgnTH3pQp0675OmLvWjlZth7Vm_6/view?usp=sharing"}
            target={"_blank"}
            rel={"noopener noreferrer"}
            style={styles.workLink}
          >
            <img height="32" width="32" src={pdf} alt="Resume link" />
          </a>
        </section>
        </div>
      </div>
      <section>
        
      </section>
    </div>
  );
};

export default About;

