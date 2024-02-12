import React from "react";
import "./OurTeam.css";
function OurTeam({ langageState }) {
  return (
    <div className="team-container">
      <div className="team-wrap">
        <div className="team-title-and-description-container">
          <div className="team-title">
            La Team<span>JW Corp</span>
          </div>
          <div className="team-title-description">
            La JW Corp est une équipe de passioné sur les technologies web et
            blockchain. Nous travaillons toujours dans un soucis de qualité et
            de répondre au mieux au besoin.
          </div>
        </div>
        <div className="team-members-bloc-container">
          <div className="team-members-developers-container">
            <div className="team-members-developers-member-container">
              <div className="team-members-profile-pic-and-name-and-job">
                {/* <div
                  style={{ visibility: "hidden" }}
                  className="team-member-profile-pic-line-up-connection"
                ></div> */}
                <div className="team-members-developers-profile-pic-container">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Fmatheo-pic.png?alt=media&token=c350a81f-5877-47aa-9aa9-c48ca75cb0d9"
                    alt=""
                  />
                </div>
                <div className="team-members-developers-name">
                  Mathéo Vallone
                </div>
                <div className="team-member-developers-job-container">
                  <div className="team-members-developers-job">
                    <span>Co-Fondateur</span>
                    <span>Fullstack Smartcontract Developer</span>
                  </div>
                </div>
              </div>
              {/* <div className="team-member-profile-pic-line-side-connection"></div> */}
              <div className="team-members-profile-pic-and-name-and-job-second">
                {/* <div className="team-member-profile-pic-line-up-connection"></div> */}
                <div className="team-members-developers-profile-pic-container">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Frami-pic.svg?alt=media&token=6d40f0fa-2e3f-48ad-8b90-422b33cc1730"
                    alt="Rami Abdou profile pic"
                  />
                </div>
                <div className="team-members-developers-name">Rami Abdou</div>
                <div className="team-member-developers-job-container">
                  <div className="team-members-developers-job">
                    <span>Co-Fondateur</span>
                    <span>Fullstack developer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-members-developers-description">
              Vision. Mathéo et Rami sont les fondateurs de la JW Corp. Investit
              dans l'écosystème blockchain depuis 2017, ils ont d'abord
              construit leurs compétences par pur passion. Ils mettent avant
              tout l'humain et l'apport de valeur sur vos besoins.
            </div>
          </div>
          <div className="team-members-developers-container">
            <div className="team-members-developers-member-container">
              <div className="team-members-profile-pic-and-name-and-job">
                {/* <div
                  // style={{ visibility: "hidden" }}
                  className="team-member-profile-pic-line-up-connection"
                ></div> */}
                <div className="team-members-developers-profile-pic-container">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Fremi-blaise-jw.png?alt=media&token=f09b1aaf-0a2e-41ac-a879-358625c5e3a8"
                    alt="Remi Blaise Pic"
                  />
                </div>
                <div className="team-members-developers-name">Rémi Blaise</div>
                <div className="team-member-developers-job-container">
                  <div className="team-members-developers-job">
                    <span>Chief Technology Officier</span>
                    <span>(CTO)</span>
                  </div>
                </div>
              </div>
              <div className="team-member-profile-pic-line-side-connection"></div>
              <div className="team-members-profile-pic-and-name-and-job-second">
                {/* <div className="team-member-profile-pic-line-up-connection"></div> */}
                <div className="team-members-developers-profile-pic-container">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Fsajeed-prfile-pic-jw.png?alt=media&token=e5b37b23-8248-4a72-9dfc-f9b8b21eda92"
                    alt="Shajeed Islam pic"
                  />
                </div>
                <div className="team-members-developers-name">
                  Shajeed Islam
                </div>
                <div className="team-member-developers-job-container">
                  <div className="team-members-developers-job">
                    <span>Fullstack developer</span>
                    <span>Web & Mobile</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-members-developers-description">
              Ce sont les maîtres de la force : ils transforment les idées en
              réalité pour l’émerveillement de tous. Une confiance au profit de
              vos projets, communication, qualité et performance sont les termes
              qui les définit le mieux.
            </div>
          </div>
          <div className="team-members-developers-container">
            <div className="team-members-developers-member-container">
              <div className="team-members-profile-pic-and-name-and-job">
                {/* <div
                  style={{ visibility: "hidden" }}
                  className="team-member-profile-pic-line-up-connection"
                ></div> */}
                <div className="team-members-developers-profile-pic-container">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Felies-profile-pic-jw.png?alt=media&token=49ddc63a-74dc-4b07-9642-9a8316302fef"
                    alt="Remi Blaise Pic"
                  />
                </div>
                <div className="team-members-developers-name">Elies Carat</div>
                <div className="team-member-developers-job-container">
                  <div className="team-members-developers-job">
                    <span>Chief Marketing Officier</span>
                    <span>(CMO)</span>
                  </div>
                </div>
              </div>
              <div className="team-member-profile-pic-line-side-connection"></div>
              <div className="team-members-profile-pic-and-name-and-job-second">
                {/* <div className="team-member-profile-pic-line-up-connection"></div> */}
                <div className="team-members-developers-profile-pic-container">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Fvictor-pro.svg?alt=media&token=d5a4cf0c-39c8-42cd-bbf6-f71647e2d04f"
                    alt="Victor Albe pic"
                  />
                </div>
                <div className="team-members-developers-name">Victor Albe</div>
                <div className="team-member-developers-job-container">
                  <div className="team-members-developers-job">
                    <span>Adjoint Marketing</span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-members-developers-description">
              Que serait la JW Corp sans son équipe de marketing prêt à tout
              pour assurer la croissance de vos projets !
            </div>
          </div>
          <div className="team-members-developers-container">
            <div className="team-members-developers-member-container">
              <div className="team-members-profile-pic-and-name-and-job">
                <div className="team-members-developers-profile-pic-container">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Fprofile-pic%20(1).png?alt=media&token=73a7d334-3ea9-414d-8404-e99517067e00"
                    alt="Daniel V Pic"
                  />
                </div>
                <div
                  className="team-members-developers-name"
                  style={{ width: "164px" }}
                >
                  Daniel V.
                </div>
                <div className="team-member-developers-job-container">
                  <div className="team-members-developers-job">
                    Senior UI/UX Designer
                  </div>
                </div>
              </div>
            </div>
            <div className="team-members-developers-member-container">
              {/* <div className="team-member-profile-pic-line-side-connection"></div> */}
              <div
                className="team-members-profile-pic-and-name-and-job-second"
                id="victor-beule"
                // style={{ marginLeft: "0px" }}
                // style={{ width:"100px" }}
              >
                <div className="team-members-developers-profile-pic-container">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/our-team%2Fvictor-beule-profile-pic.png?alt=media&token=b9b5c4ca-7a65-4520-9859-ba56a5aa1403"
                    alt="Victor Beulé Pic"
                  />
                </div>
                <div className="team-members-developers-name">Victor Beulé</div>
                <div className="team-member-developers-job-container">
                  <div className="team-members-developers-job">
                    UI/UX Designer
                  </div>
                </div>
              </div>
            </div>
            <div className="team-members-developers-description">
              Ils font la fierté de la JW Corp. Daniel et Victor ont travaillés
              pour des grands comptes et des marques prestigieuses, la JW Corp
              sera ravi de vous proposer ses services de Design de haute
              voltiges.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
