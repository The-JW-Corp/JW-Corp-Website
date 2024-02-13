import React from "react";
// import "./OurTeam.css";
// import 'tailwindcss/tailwind.css'
function OurTeam({ langageState }) {
  const people = [
    {
      name: "Leonard Krasner",
      role: "Senior Designer",
      imageUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      xUrl: "#",
      linkedinUrl: "#",
    },
    {
      name: "Leonard Krasner",
      role: "Senior Designer",
      imageUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      xUrl: "#",
      linkedinUrl: "#",
    },
    {
      name: "Leonard Krasner",
      role: "Senior Designer",
      imageUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      xUrl: "#",
      linkedinUrl: "#",
    },
    // More people...
  ];
  return (

    
    // <div className="team-container">
    //   <div className="team-wrap">
    //     <div className="team-title-and-description-container">
    //       <div className="team-title">
    //         La Team<span>JW Corp</span>
    //       </div>
    //       <div className="team-title-description">
    //         La JW Corp est une équipe de passioné sur les technologies web et
    //         blockchain. Nous travaillons toujours dans un soucis de qualité et
    //         de répondre au mieux au besoin.
    //       </div>
    //     </div>
    //     <div className="team-members-bloc-container">
    //       <div className="team-members-developers-container">
    //         <div className="team-members-developers-member-container">
    //           <div className="team-members-profile-pic-and-name-and-job">
    //             <div className="team-members-developers-profile-pic-container">
    //               <img
    //                 src="https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Fmatheo-pic.png?alt=media&token=c350a81f-5877-47aa-9aa9-c48ca75cb0d9"
    //                 alt=""
    //               />
    //             </div>
    //             <div className="team-members-developers-name">
    //               Mathéo Vallone
    //             </div>
    //             <div className="team-member-developers-job-container">
    //               <div className="team-members-developers-job">
    //                 <span>Co-Fondateur</span>
    //                 <span>Fullstack Smartcontract Developer</span>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="team-members-profile-pic-and-name-and-job-second">
    //             <div className="team-members-developers-profile-pic-container">
    //               <img
    //                 src="https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Frami-pic.svg?alt=media&token=6d40f0fa-2e3f-48ad-8b90-422b33cc1730"
    //                 alt="Rami Abdou profile pic"
    //               />
    //             </div>
    //             <div className="team-members-developers-name">Rami Abdou</div>
    //             <div className="team-member-developers-job-container">
    //               <div className="team-members-developers-job">
    //                 <span>Co-Fondateur</span>
    //                 <span>Fullstack developer</span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="team-members-developers-description">
    //           Vision. Mathéo et Rami sont les fondateurs de la JW Corp. Investit
    //           dans l'écosystème blockchain depuis 2017, ils ont d'abord
    //           construit leurs compétences par pur passion. Ils mettent avant
    //           tout l'humain et l'apport de valeur sur vos besoins.
    //         </div>
    //       </div>
    //       <div className="team-members-developers-container">
    //         <div className="team-members-developers-member-container">
    //           <div className="team-members-profile-pic-and-name-and-job">
    //             <div className="team-members-developers-profile-pic-container">
    //               <img
    //                 src="https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Fremi-blaise-jw.png?alt=media&token=f09b1aaf-0a2e-41ac-a879-358625c5e3a8"
    //                 alt="Remi Blaise Pic"
    //               />
    //             </div>
    //             <div className="team-members-developers-name">Rémi Blaise</div>
    //             <div className="team-member-developers-job-container">
    //               <div className="team-members-developers-job">
    //                 <span>Chief Technology Officier</span>
    //                 <span>(CTO)</span>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="team-member-profile-pic-line-side-connection"></div>
    //           <div className="team-members-profile-pic-and-name-and-job-second">
    //             <div className="team-members-developers-profile-pic-container">
    //               <img
    //                 src="https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Fsajeed-prfile-pic-jw.png?alt=media&token=e5b37b23-8248-4a72-9dfc-f9b8b21eda92"
    //                 alt="Shajeed Islam pic"
    //               />
    //             </div>
    //             <div className="team-members-developers-name">
    //               Shajeed Islam
    //             </div>
    //             <div className="team-member-developers-job-container">
    //               <div className="team-members-developers-job">
    //                 <span>Fullstack developer</span>
    //                 <span>Web & Mobile</span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="team-members-developers-description">
    //           Ce sont les maîtres de la force : ils transforment les idées en
    //           réalité pour l’émerveillement de tous. Une confiance au profit de
    //           vos projets, communication, qualité et performance sont les termes
    //           qui les définit le mieux.
    //         </div>
    //       </div>
    //       <div className="team-members-developers-container">
    //         <div className="team-members-developers-member-container">
    //           <div className="team-members-profile-pic-and-name-and-job">
    //             <div className="team-members-developers-profile-pic-container">
    //               <img
    //                 src="https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Felies-profile-pic-jw.png?alt=media&token=49ddc63a-74dc-4b07-9642-9a8316302fef"
    //                 alt="Remi Blaise Pic"
    //               />
    //             </div>
    //             <div className="team-members-developers-name">Elies Carat</div>
    //             <div className="team-member-developers-job-container">
    //               <div className="team-members-developers-job">
    //                 <span>Chief Marketing Officier</span>
    //                 <span>(CMO)</span>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="team-member-profile-pic-line-side-connection"></div>
    //           <div className="team-members-profile-pic-and-name-and-job-second">
    //             <div className="team-members-developers-profile-pic-container">
    //               <img
    //                 src="https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Fvictor-pro.svg?alt=media&token=d5a4cf0c-39c8-42cd-bbf6-f71647e2d04f"
    //                 alt="Victor Albe pic"
    //               />
    //             </div>
    //             <div className="team-members-developers-name">Victor Albe</div>
    //             <div className="team-member-developers-job-container">
    //               <div className="team-members-developers-job">
    //                 <span>Adjoint Marketing</span>
    //                 <span></span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="team-members-developers-description">
    //           Que serait la JW Corp sans son équipe de marketing prêt à tout
    //           pour assurer la croissance de vos projets !
    //         </div>
    //       </div>
    //       <div className="team-members-developers-container">
    //         <div className="team-members-developers-member-container">
    //           <div className="team-members-profile-pic-and-name-and-job">
    //             <div className="team-members-developers-profile-pic-container">
    //               <img
    //                 src="https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Fprofile-pic%20(1).png?alt=media&token=73a7d334-3ea9-414d-8404-e99517067e00"
    //                 alt="Daniel V Pic"
    //               />
    //             </div>
    //             <div
    //               className="team-members-developers-name"
    //               style={{ width: "164px" }}
    //             >
    //               Daniel V.
    //             </div>
    //             <div className="team-member-developers-job-container">
    //               <div className="team-members-developers-job">
    //                 Senior UI/UX Designer
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="team-members-developers-member-container">
    //           <div
    //             className="team-members-profile-pic-and-name-and-job-second"
    //             id="victor-beule"
    //           >
    //             <div className="team-members-developers-profile-pic-container">
    //               <img
    //                 src="https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Fvictor-beule-profile-pic.png?alt=media&token=b9b5c4ca-7a65-4520-9859-ba56a5aa1403"
    //                 alt="Victor Beulé Pic"
    //               />
    //             </div>
    //             <div className="team-members-developers-name">Victor Beulé</div>
    //             <div className="team-member-developers-job-container">
    //               <div className="team-members-developers-job">
    //                 UI/UX Designer
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="team-members-developers-description">
    //           Ils font la fierté de la JW Corp. Daniel et Victor ont travaillés
    //           pour des grands comptes et des marques prestigieuses, la JW Corp
    //           sera ravi de vous proposer ses services de Design de haute
    //           voltiges.
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    // <div className="bg-gray-900 py-24 sm:py-32">
    //   <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
    //     <div className="mx-auto max-w-2xl">
    //       <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
    //         Meet our team
    //       </h2>
    //       <p className="mt-4 text-lg leading-8 text-gray-400">
    //         We’re a dynamic group of individuals who are passionate about what
    //         we do.
    //       </p>
    //     </div>
    //     <ul
    //       role="list"
    //       className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
    //     >
    //       {people.map((person) => (
    //         <li
    //           key={person.name}
    //           className="rounded-2xl bg-gray-800 px-8 py-10"
    //         >
    //           <img
    //             className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
    //             src={person.imageUrl}
    //             alt=""
    //           />
    //           <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
    //             {person.name}
    //           </h3>
    //           <p className="text-sm leading-6 text-gray-400">{person.role}</p>
    //           <ul role="list" className="mt-6 flex justify-center gap-x-6">
    //             <li>
    //               <a
    //                 href={person.xUrl}
    //                 className="text-gray-400 hover:text-gray-300"
    //               >
    //                 <span className="sr-only">X</span>
    //                 <svg
    //                   className="h-5 w-5"
    //                   aria-hidden="true"
    //                   fill="currentColor"
    //                   viewBox="0 0 20 20"
    //                 >
    //                   <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
    //                 </svg>
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href={person.linkedinUrl}
    //                 className="text-gray-400 hover:text-gray-300"
    //               >
    //                 <span className="sr-only">LinkedIn</span>
    //                 <svg
    //                   className="h-5 w-5"
    //                   aria-hidden="true"
    //                   fill="currentColor"
    //                   viewBox="0 0 20 20"
    //                 >
    //                   <path
    //                     fillRule="evenodd"
    //                     d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
    //                     clipRule="evenodd"
    //                   />
    //                 </svg>
    //               </a>
    //             </li>
    //           </ul>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
   <> </>
  );
}

export default OurTeam;
