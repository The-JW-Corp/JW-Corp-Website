import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

interface NavbarProps {
  handlingLangage: () => void;
  checkDomain: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ handlingLangage, checkDomain }) => {
  const [displayNotification, setDisplayNotification] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayNotification(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="component-navbar">
        <div className="navbar-logo-container">
          {checkDomain ? (
            <a href="https://jwcorp.io">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/jwlogosolutionblanc.svg?alt=media&token=7c0af8d1-bdc2-4933-8911-2862ee8c33f7"
                alt="JW Corp logo blanc"
              />
            </a>
          ) : (
            <Link to="/">
              <img src="path/to/jwblanc" alt="JW Corp logo blanc" />
            </Link>
          )}
        </div>

        <HashLink
          className="navbar-contact-us"
          style={
            displayNotification
                ? {
                  animation: "jellow 2s ease 0s 1 normal forwards",
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
};

export default Navbar;
