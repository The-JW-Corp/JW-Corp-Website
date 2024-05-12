import React, { useEffect, useState } from "react";
import "./Navbar.css";
import jwblanc from "../../assets/logoJWCorp/jwlogosolutionblanc.svg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar({ handlingLangage, checkDomain }) {
  const [displayNotification, setDisplayNotification] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDisplayNotification(true);
    }, 5000);
  }, []);
  return (
    <>
      <section className="component-navbar">
        <div className="navbar-logo-container">
          {checkDomain ? (
            <>
              <a href="https://jwcorp.io">
                <img src={jwblanc} alt="JW Corp logo blanc" />
              </a>
            </>
          ) : (
            <>
              <Link to="/">
                <img src={jwblanc} alt="JW Corp logo blanc" />
              </Link>
            </>
          )}
        </div>

        <HashLink
          className="navbar-contact-us"
          style={
            displayNotification
              ? {
                  animation: " jellow 2s ease 0s 1 normal forwards",
                }
              : {}
          }
          to={"/#calendly-id"}
        >
          <div>
            CONTACT US
            {displayNotification && (
              <div className="navbar-contact-us-notif">1</div>
            )}
          </div>
        </HashLink>
        <div className="navbar-switch-langage-container">
          <div></div>
          <div>EN/FR  </div>
          <div>
            <label className="navbar-switch">
              <input type="checkbox" onChange={handlingLangage} />
              <span className="navbar-slider navbar-round"></span>
            </label>
          </div>
        </div>
      </section>
    </>
  );
}
export default Navbar;
