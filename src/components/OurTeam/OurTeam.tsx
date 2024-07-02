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
      xUrl: "https://twitter.com/jwmatheo",
      linkedinUrl: "https://www.linkedin.com/in/matheo-vallone/",

      githubUrl: "https://github.com/JWMatheo",
    },
    {
      name: "Rami Abdou",
      role: "Co-Fondateur & Frontend Developer",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Frami-pic.svg?alt=media&token=6d40f0fa-2e3f-48ad-8b90-422b33cc1730",
      xUrl: "https://twitter.com/RamiAbdou_jw",
      linkedinUrl: "https://www.linkedin.com/in/rami-abdou1/",
      githubUrl: "https://github.com/JW-Rami",
    },
    {
      name: "Rémi Blaise",
      role: "Chief Technology Officer (CTO)",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Fremi-blaise-jw.png?alt=media&token=f09b1aaf-0a2e-41ac-a879-358625c5e3a8",
      // xUrl: "",
      linkedinUrl: "https://www.linkedin.com/in/remi-blaise/",
      githubUrl: "https://github.com/remi-blaise",
    },
    // {
    //   name: "Shajeed Islam",
    //   role: "Fullstack Developer, Web & Mobile",
    //   imageUrl:
    //     "https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Fsajeed-prfile-pic-jw.png?alt=media&token=e5b37b23-8248-4a72-9dfc-f9b8b21eda92",
    //   // xUrl: "",
    //   linkedinUrl: "https://www.linkedin.com/in/sajistreo3/",
    //   githubUrl: "https://github.com/Sajistreo3",
    // },
    {
      name: "Eddy Boughioul",
      role: "Senior Web3 Fullstack Engineer",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2FEddyPPJWCorp.png?alt=media&token=214da443-3dc5-49b8-9d53-8505c2dd2af6",
      // xUrl: "",
      linkedinUrl: "https://www.linkedin.com/in/eddy-boughioul-aa40aaa9/",
      githubUrl: "https://github.com/youtpout",
    },
    // {
    //   name: "Raphaella Wabi",
    //   role: "Head Of Business",
    //   imageUrl:
    //     "https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Fprofile-pic-Raphaella.png?alt=media&token=0195a95c-31d3-4a6e-a831-e5c0df87434b",
    //   linkedinUrl: "https://www.linkedin.com/in/heyraphaellaw/",
    // },
    {
      name: "Elies Carat",
      role: "Chief Marketing Officer (CMO)",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Felies-profile-pic-jw.png?alt=media&token=49ddc63a-74dc-4b07-9642-9a8316302fef",
      xUrl: "https://twitter.com/EliesCarat",
      linkedinUrl: "https://www.linkedin.com/in/elies-carat/",
      // githubUrl: "",
    },
    {
      name: "Victor Albe",
      role: "Adjoint Marketing",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Fvictor-pro.svg?alt=media&token=d5a4cf0c-39c8-42cd-bbf6-f71647e2d04f",
      xUrl: "",
      linkedinUrl: "https://www.linkedin.com/in/victoralbe/",
      // githubUrl: "",
    },
    {
      name: "Daniel V.",
      role: "Senior UI/UX Designer",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Fprofile-pic%20(1).png?alt=media&token=73a7d334-3ea9-414d-8404-e99517067e00",
      // xUrl: "",
      linkedinUrl: "https://www.linkedin.com/in/daniel-v-b8b90b23a/",
      // githubUrl: "",
    },
    // {
    //   name: "Victor Beulé",
    //   role: "UI/UX Designer",
    //   imageUrl:
    //     "https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Fvictor-beule-profile-pic.png?alt=media&token=b9b5c4ca-7a65-4520-9859-ba56a5aa1403",
    //   xUrl: "#",
    //   linkedinUrl: "https://www.linkedin.com/in/victor-beul%C3%A9-6939171a1/",
    // githubUrl:""},
    // {
    //   name: "You",
    //   role: "???",
    //   imageUrl:
    //     "https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Fvictor-beule-profile-pic.png?alt=media&token=b9b5c4ca-7a65-4520-9859-ba56a5aa1403",
    //   xUrl: "#",
    //   linkedinUrl: "",
    // githubUrl:""},
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
                  {person.xUrl && (
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
                  )}
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
                  {person.githubUrl && (
                    <li>
                      <a href={person.githubUrl} className="social-link">
                        <span className="sr-only"></span>
                        {/* Ici, insérez le SVG ou utilisez une icône */}
                        <svg viewBox="0 0 496 512" fill="currentColor">
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                        </svg>
                      </a>
                    </li>
                  )}
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
