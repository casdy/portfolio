import React from "react";
import code from "../../assets/icons/code.svg";
import github from "../../assets/icons/github.svg";
import me from "../../assets/icons/me.svg";
import typescript from "../../assets/icons/typescript.svg";
import svelte from "../../assets/icons/svelte.svg";
import react from "../../assets/icons/react.svg";
import javascript from "../../assets/icons/javascript.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";
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
    width: "20%",
    fontFamily: "RobotoCondensed",
    fontSize: "1.9rem",
    marginTop: "-30vh",
    textShadow: "1 0 0.9vh #bfbfbf",
    marginBottom: "20vh",
    color: "black",
    padding: "0px", 
   textDecoration: "underline",

    
   }, 

   story: { 
    width: "100%",
    fontFamily: "RobotoCondensed",
    fontSize: "1.4rem",
    marginTop: "-25vh",
    textShadow: "1 0 0.9vh #bfbfbf",
    marginBottom: "10vh",
    color: "black",
    padding: "10px", 
   },

   skills: {  
    width: "20%",
    fontFamily: "RobotoCondensed",
    fontSize: "1.9rem",
    marginTop: "-2vh",
    textShadow: "1 0 0.9vh #bfbfbf",
    marginBottom: "-8vh",
    color: "black",
    textDecoration: "underline",
  }, 
  stack: {
    width: "100%",
    fontFamily: "RobotoCondensed",
    fontSize: "1.2rem",
    marginTop: "6vh",
    textShadow: "1 0 0.9vh #bfbfbf",
    marginBottom: "2vh",
    color: "black",
    

  },
  stack2: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "5px",
    width: "40%",
    fontFamily: "RobotoCondensed",
    fontSize: "1.4rem",
    color: "white", 
    marginBottom: "30px",
    padding: "10px", 
  },

  h1: {
    fontFamily: "times-regular",
    color: "#464444",
    textDecorationThickness: "0px",
    fontSize: "3.5vh",
    marginTop: "15vh",
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
    marginBottom: "55vh",
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
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
    color: "#9c9c9c"

   
   
  },

  socialLink: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "50%",
    marginTop: "-1vh",

   
   
  

  },

  topnav: {
    margin: "0px",
    display: "flex",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "right",
    marginLeft: "90vw",
    marginTop: "30px",
  },

};



const About = () => {
  return (
    <div style={styles.div}>
      <header style={styles.topnav}>
        <div>
        <section style={styles.workLink}>
          <a href={"#me"}> <img height="35" width="35" src={code} alt="About me"/></a>
            <a href={"#me"}><img height="25" width="25" src={me} alt="About me"/></a>
          </section>
      </div>
      </header>

      <div style={styles.mainContent}>
        <section>
          <h1 style={styles.h1}>Hi! My name is</h1>
          <h2 style={styles.h2}> Caleb Ojukwu </h2>
          <h3 style={styles.h3}> I like to build things that people use or play with on the web. <br/>
          <br/>Currently living in Winnipeg, Manitoba Canada.<br/>
          <br/>View my profiles and connect with me.
          <div >
          <br/><br/>
        <section style={styles.socialLink}>
          <a href={"https://github.com/casdy"}
            target={"_blank"}
            rel={"noopener noreferrer"}><img height="30" width="30" src={github} alt="Github link"/>
          </a>
          <a href={"https://www.linkedin.com/in/calebojukwu"}
            target={"_blank"}
            rel={"noopener noreferrer"}><img height="30" width="30" src={linkedin} alt="Linkedin link" />
          </a>
          <a href={"https://twitter.com/kaleb_io"}
            target={"_blank"}
            rel={"noopener noreferrer"}><img height="30" width="30" src={twitter} alt="Twitter link" />
          </a>
          <a href={"https://drive.google.com/file/d/1lBeshiHsW_JPAw-L84dW0P1Zir9Yj3SH/view?usp=sharing"}
            target={"_blank"}
            rel={"noopener noreferrer"}><img height="30" width="30" src={pdf} alt="Resume link" />
          </a>
        </section>
        </div>
           </h3>
         
          <p id="me" style={styles.me}>About me</p>
          <br/><br/>
          <p id="me" style={styles.story}>I'm a frontend web software developer, i like to design and develop web experiences that people find fun and functional.
            <br/><br/>
              My interest in web development began in 2016, I took a web devolopment course, which had a project based curriculum. 
              I was able to learn how to use web technologies such as: HTML, CSS and JavaScript, to build a website from scratch.
              <br/>
              Fast-forward to today, i've had the opportunity to build my portfolio website and work on some personal and group projects.
            <br/><br/>
            I look forward to gaining new experience and connecting with new people. In my free time, you can find me either cooking, taking pictures or hiking.
          </p>
          <p id="me" style={styles.skills}>Skills</p>
          <p id="me" style={styles.stack}>
          <br/>
          These are the technologies that I've worked with:
          </p>
          <section style={styles.stack2}>
          <a> <img height="25" width="25" src={typescript} alt="Typescript"/></a>
          <a> <img height="25" width="25" src={react} alt="React" /></a>
          <a> <img height="25" width="25" src={svelte} alt="Svelte"/></a>
          <a> <img height="25" width="25" src={javascript} alt="Javascript"/></a>
          <a> <img height="25" width="25" src={html} alt="HTML"/></a>
          <a> <img height="25" width="25" src={css} alt="CSS"/></a>
          </section>
        </section>
        
        
      </div>
      <section>
        
      </section>
    </div>
  );
};

export default About;

