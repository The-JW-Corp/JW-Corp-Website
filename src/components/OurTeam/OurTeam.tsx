import React from "react";
import "./OurTeam.css";
// import 'tailwindcss/tailwind.css'
function OurTeam({ langageState }) {
  const people = [
    {
      name: "Mathéo Vallone",
      role: "Co-Fondateur & Fullstack Smartcontract Developer",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Fmatheo-pic.png?alt=media&token=c350a81f-5877-47aa-9aa9-c48ca75cb0d9",
      xUrl: "#",
      linkedinUrl: "#",
    },
    {
      name: "Rami Abdou",
      role: "Co-Fondateur & Fullstack Developer",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Frami-pic.svg?alt=media&token=6d40f0fa-2e3f-48ad-8b90-422b33cc1730",
      xUrl: "#",
      linkedinUrl: "#",
    },
    {
      name: "Rémi Blaise",
      role: "Chief Technology Officer (CTO)",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Fremi-blaise-jw.png?alt=media&token=f09b1aaf-0a2e-41ac-a879-358625c5e3a8",
      xUrl: "#",
      linkedinUrl: "#",
    },
    {
      name: "Shajeed Islam",
      role: "Fullstack Developer, Web & Mobile",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Fsajeed-prfile-pic-jw.png?alt=media&token=e5b37b23-8248-4a72-9dfc-f9b8b21eda92",
      xUrl: "#",
      linkedinUrl: "#",
    },
    {
      name: "Elies Carat",
      role: "Chief Marketing Officer (CMO)",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Felies-profile-pic-jw.png?alt=media&token=49ddc63a-74dc-4b07-9642-9a8316302fef",
      xUrl: "#",
      linkedinUrl: "#",
    },
    {
      name: "Victor Albe",
      role: "Adjoint Marketing",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Fvictor-pro.svg?alt=media&token=d5a4cf0c-39c8-42cd-bbf6-f71647e2d04f",
      xUrl: "#",
      linkedinUrl: "#",
    },
    {
      name: "Daniel V.",
      role: "Senior UI/UX Designer",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Fprofile-pic%20(1).png?alt=media&token=73a7d334-3ea9-414d-8404-e99517067e00",
      xUrl: "#",
      linkedinUrl: "#",
    },
    {
      name: "Victor Beulé",
      role: "UI/UX Designer",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Fvictor-beule-profile-pic.png?alt=media&token=b9b5c4ca-7a65-4520-9859-ba56a5aa1403",
      xUrl: "#",
      linkedinUrl: "#",
    },
  ];

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
              <li key={person.name} className="team-member">
                <img className="member-photo" src={person.imageUrl} alt="" />
                <h3 className="member-name">{person.name}</h3>
                <p className="member-role">{person.role}</p>
                <ul className="social-links">
                  <li>
                    <a href={person.xUrl} className="social-link">
                      <span className="sr-only"></span>
                      {/* Ici, insérez le SVG ou utilisez une icône */}
                      <svg
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href={person.linkedinUrl} className="social-link">
                      <span className="sr-only"></span>
                      {/* Ici, insérez le SVG ou utilisez une icône */}
                      <svg
                        // className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default OurTeam;
