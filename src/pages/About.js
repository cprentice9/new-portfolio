import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about_container">
      <div>
        <div className="about_title">
          <h1>About Me</h1>
        </div>
        <img
          className="about_img"
          alt="My son and I"
          src="https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/311435266_10228022015446481_375629265674883144_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qhbQQFGym1YAX-gGgak&_nc_ht=scontent-dfw5-2.xx&oh=00_AfD_ajiaa9wln9NWZsqbFAhDvB4_s6mARLPX1tmHVRi5Vw&oe=636F4CFD"
        />
        <p className="about_paragraph">
          After going through three years of University and having my first child with my wife, I decided that I wanted
          a change in my life. In early 2022 I started the Dev Mountain Full Stack Web Dev Program. I completed the
          program a month ahead of schedule in September of 2022. I am currently working as a Software Engineer II at
          Armada Power. I am currently living in North Texas where I have lived with my family for the last 6 years. I
          grew up in the Bay Area, in a suburb of San Francisco called Danville. I went to school from K-12 in Danville.
          I attended K-5 at Vista Grande Elementary School. I attended grades 6-8 at Los Cerros Middle School. I
          attended all four years of High School at Monte Vista High School. In High School I played third base for the
          baseball team. I did three years of a BS in Physics at the University of North Texas. I am a die hard Yankees
          fan and will be until I leave this earth. GO YANKS!
        </p>
      </div>
    </div>
  );
}

export default About;
