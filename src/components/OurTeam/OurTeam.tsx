import React from "react";
import "./OurTeam.css";
import { people, advisors } from "./teamData";
import TeamMember from "./TeamMember";

function OurTeam() {
  return (
    <>
      <div className="our-team-container">
        <div className="our-team-content-container">
          <div className="intro-container">
            <h2 className="our-team-title">Meet our team</h2>
            <p className="our-team-description">
              We’re a dynamic group of individuals who are passionate about what
              we do.
            </p>
          </div>
          <ul className="our-team-list">
            {people.map((person) => (
              <TeamMember key={person.name} {...person} />
            ))}
          </ul>
          <h2 style={{ marginTop: "10px" }} className="our-team-title">
            Advisors
          </h2>
          <ul className="our-team-list">
            {advisors.map((advisor) => (
              <TeamMember key={advisor.name} {...advisor} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default OurTeam;
