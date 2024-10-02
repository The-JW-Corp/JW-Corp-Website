import "./WhoAreWe.css";
import plus from "../../assets/plus.svg";
import Image from "next/image";
function WhoAreWe({ langageState }) {
  return (
    <div
      className="who-are-we-container"
      style={{ marginTop: "50px", marginBottom: "50px" }}
    >
      <div className="who-are-we-wrap">
        <div className="who-are-we-left-column">
          <p>
            {langageState ? (
              <>Véritables enthousiastes, nous développons nos compétences autour de la Blockchain depuis 2017.</>
            ) : (
              <>
                True enthusiasts, we've been building our skills around
                Blockchain since 2017.
              </>
            )}
          </p>
          <p>
            {langageState ? (
              <>
                Nous aimons aller en profondeur dans la compréhension et
                résoudre des problèmes complexes en solutions simples.
                L'industrie de la blockchain correspond parfaitement à nos
                valeurs.
              </>
            ) : (
              <>
                We love going deep in understanding and solve complex problems
                into simple solutions. The blockchain industry fits perfectly
                with our values.
              </>
            )}
          </p>
          <ul className="who-are-we-list-container">
            <li>
              <Image src={plus} alt="" />
              {langageState ? <>+3 ans d'expérience</> : <>+3 years xp</>}
            </li>
            <li>
              <Image src={plus} alt="" />
              {langageState ? (
                <>
                  Nous avons travaillé sur plus de 20 projets web3 avec 24 développeurs
                  différents
                </>
              ) : (
                <>Worked for +20 web3 projects with 24 different devs</>
              )}
            </li>
            <li>
              <Image src={plus} alt="" />
              {langageState ? (
                <>
                  Rédaction de smartcontracts qui ont géré des millions de dollars
                </>
              ) : (
                <>Wrote smartcontracts that managed millions of dollars</>
              )}
            </li>
            <li>
              <Image src={plus} alt="" />
              {langageState ? (
                <>
                  5 blockchains différentes utilisées dans divers projets
                  (EVM/SVM)
                </>
              ) : (
                <>
                  5 different blockchains utilized across various projects
                  (EVM/SVM)
                </>
              )}
            </li>
            <li>
              <Image src={plus} alt="" />
              {langageState ? (
                <>
                  Nous avons travaillé pour des industries variées : marques de luxe,
                  immobilier, écoles, réseaux sociaux web3, DeFi, jeux vidéos web3
                </>
              ) : (
                <>
                  Worked for diversified industries: Luxury brands, Real estate,
                  Schools, Social networks, DeFi, Gaming
                </>
              )}
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
