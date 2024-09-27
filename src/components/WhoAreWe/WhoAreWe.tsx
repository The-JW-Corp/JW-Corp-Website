import "./WhoAreWe.css";
import plus from "../../assets/plus.svg";
import Image from "next/image";
function WhoAreWe() {
  return (
    <div
      className="who-are-we-container"
      style={{ marginTop: "50px", marginBottom: "50px" }}
    >
      <div className="who-are-we-wrap">
        <div className="who-are-we-left-column">
          <p>
            True enthusiasts, we've been building our skills around Blockchain
            since 2017.
            <p>
              We love going deep in understanding and solve complex problems
              into simple solutions.The blockchain industry feat perfectly with
              our values.
            </p>
          </p>
          <ul className="who-are-we-list-container">
            <li>
              <Image src={plus} alt="" />
              +3 years xp
            </li>
            <li>
              <Image src={plus} alt="" /> Worked for +20 web3 projects with 24
              differents devs
            </li>
            <li>
              <Image src={plus} alt="" /> Wrote smartcontracts that managed
              millions of dollars
            </li>
            <li>
              <Image src={plus} alt="" /> Worked for diversified industries:
              Luxury brands, Real estate, Schools, Socials networks, DeFi,
              Gaming
            </li>
          </ul>
        </div>
        <div className="who-are-we-right-column">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/jw-corp.appspot.com/o/IMG_5863.jpg?alt=media&token=112517e1-3bcb-4fd8-8f25-6b43f2615ee3"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default WhoAreWe;
