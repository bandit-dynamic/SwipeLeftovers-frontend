import React from "react";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header />
      <section className="sectionAbout">
        <div className="about-content">
          <h1 className="about-heading" style={{ fontFamily: 'Titan One, cursive' }}>
            Welcome to Swipe Leftovers
          </h1>
          <p>
            Are you tired of swiping left on dating apps and wasting your time on people who aren't a match for you? Swipe Leftovers is here to change that! Our dating app is designed to connect you with people who share your interests, values, and personality traits. We know that finding the right person can be a challenge, but we're here to make it easier for you. Our app allows people from different walks of life to connect by being themselves. Whether you're a busta, a creep, and or even a convict, you're free to be yourself! We also offer a variety of communication tools, so you can get to know your matches before deciding to meet in person. At Swipe Leftovers, we believe that true compatibility goes beyond just looks. That's why we encourage our users to fill out detailed profiles that highlight their personalities and interests. Our team is dedicated to making your dating experience enjoyable and successful. So why wait? Sign up today and start swiping leftovers on the perfect match for you!
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
