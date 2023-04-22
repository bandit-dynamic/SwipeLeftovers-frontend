import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../About.css";
import "../App.css"

const About = () => {
  return (
    <>
      <Header />
      <section className="sectionAbout">
        <div className="about-left">
          <h2 className="about-heading" style={{ fontFamily: "Titan One, cursive" }}>
            Love At First Swipe
          </h2>
          <p> Are you tired of swiping right on dating apps only to waste your time? At Swipe Leftovers, we use basic principles, such as a simple message/email, to connect individuals. </p>
          <p>Our app allows people from different walks of life to connect. Whether you're a busta, a creep, or even a convict, you're free to find love!</p><p> We encourage our users to fill out detailed profiles that highlight their basic info, emails, and bio. Sign up by clicking the Swipe Leftovers icon on the top left corner and start swiping leftovers!</p>
        </div>
        <div className="about-right">
          <img
            src="https://media4.giphy.com/media/26tP9t4dtFeeDsBYk/giphy.gif?cid=ecf05e47q668pa1k3g8he4fu9gxt9o8dt000fw2n3pcrcj64&rid=giphy.gif&ct=g"
            style={{ width: "100%", height: "100%" }}
          ></img>
        </div>
      </section>
    </>
  );
};

export default About;
