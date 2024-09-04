import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import { SwiperEvents } from "swiper/types";

function Carousel({ langageState }) {
  const [swiperIndex, setSwiperIndex] = useState(0);
  // const [isMouseOnSwiper, setIsMouseOnSwiper] = useState(false);

  // useEffect(() => {
  //   console.log(isMouseOnSwiper);
  // }, [isMouseOnSwiper]);

  const handleSlideChange = (swiper: any) => {
    console.log(swiper);
    console.log("Current slide index:", swiper.activeIndex);
    setSwiperIndex(swiper.activeIndex);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-title">
        {langageState ? "Nos Projets" : "Our Projects"}
      </div>

      <div className="carousel-wrap">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          onSlideChange={handleSlideChange}
        >
          <SwiperSlide
            // onMouseEnter={() => setIsMouseOnSwiper(true)}
            // onMouseLeave={() => setIsMouseOnSwiper(false)}
            onDoubleClick={() => console.log("double click")}
            className="swiper-slide-container"
          >
            <div className="carousel-slide-container">
              <div className="carousel-slide-wrap">Philippe Gonet</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-slide-container">
              <div className="carousel-slide-wrap">
                Republike - Web3 Social Media
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-slide-container">
              <div className="carousel-slide-wrap">Lux 5* Hotel Group</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-slide-container">
              <div className="carousel-slide-wrap">Sofan</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-slide-container">
              <div className="carousel-slide-wrap">Borpa</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-slide-container">
              <div className="carousel-slide-wrap">Stone Real Estate - RWA</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-slide-container">
              <div className="carousel-slide-wrap">NoBrainer</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="carousel-description-container">
        <div className="carousel-description-item">
          {swiperIndex === 0 ? (
            <>
              {langageState ? (
                <>
                  La maison Philippe Gonet est une marque de champagne qui
                  souhaite récompenser les membres de leur club par
                  l’intermédiaire d’une collection NFT liée à des utilités que
                  leur offre la maison.   Ils réinventent la notion de fidélité
                  en ancrant la confiance sur la blockchain.
                </>
              ) : (
                <>
                  Philippe Gonet is a champagne brand that wants to reward their
                  club members through an NFT collection linked to utilities
                  offered by the house. They are reinventing the notion of
                  loyalty by anchoring trust on blockchain. The project required
                  support with blockchain technology.
                </>
              )}
            </>
          ) : swiperIndex === 1 ? (
            <>
              {langageState ? (
                <>
                  Republike est une startup française avec des milliers
                  d’utilisateurs ils ont un univers un réseau social web3
                  développé sur la Republike Enfine for Democracy (RED) avec de
                  la self moderation.
                </>
              ) : (
                <>
                  Republike is a French startup with thousands of users they
                  have a web3 social network universe developed on the Republike
                  Enfine for Democracy (RED) with self moderation.
                </>
              )}
            </>
          ) : swiperIndex === 2 ? (
            <>
              {langageState ? (
                <>
                  The Lux Collective est un groupe hôtelier 5 étoiles
                  international basé à Singapour . Nous avons travaillé en
                  étroite collaboration avec Metalyde une agence web3 axée sur
                  le branding et la stratégie commerciale. Pour les fêtes de fin
                  d’année, le groupe souhaitait réaliser une loterie de NFT
                  offrant une chance de remporter l'une des 6 expériences
                  uniques dans les hôtels LUX*.{" "}
                </>
              ) : (
                <>
                  The Lux Collective is an international 5-star hotel group
                  based in Singapore . We worked closely with Metalyde, a web3
                  agency focused on branding and marketing strategy. For the
                  festive season, the group wanted to run an NFT lottery
                  offering a chance to win one of 6 unique experiences at LUX*
                  hotels.
                </>
              )}
            </>
          ) : swiperIndex === 3 ? (
            <>
              {langageState ? (
                <>
                  Sofan est un réseau social en beta rassemblant fans et
                  athlètes. Ces derniers peuvent créer leurs collections de NFT
                  et y associer des contreparties. Ces contreparties peuvent
                  concerner l’accès à certains posts de l’athlète ou bien
                  permettre l’accès à des évènements en présentiel. Les
                  contreparties ne sont pas limités et dépendent de
                  l’imagination de l’athlète. La plateforme est axée sur le
                  domaine de la voile et à pour vocation de se développer sur
                  d’autres sports.
                </>
              ) : (
                <>
                  Sofan is a social network in beta that brings together fans
                  and athletes. The latter can create their own NFT collections
                  and associate counterparties with them. These may include
                  access to certain posts by the athlete, or access to live
                  events. There is no limit to the number of rewards available,
                  and they depend on the athlete's imagination. The platform is
                  focused on sailing, with a view to expanding to other sports.
                </>
              )}
            </>
          ) : swiperIndex === 4 ? (
            <>
              {langageState ? (
                <>
                  Borpa est un projet monté par une DAO ils ont lancés 2 séries
                  de levée de fonds amassant + d’1.3M, puis ont fait 2
                  lancements. Un premier à 80m capitalisation et un second à
                  30m. Borpa compte + de 500k followers sur Twitter et 50k
                  membres sur Discord l’attente était grande et des attaques
                  Ddos étaient attendus. L’équipe était constituée d’une
                  vingtaine de personne, dont 4 développeurs.
                </>
              ) : (
                <>
                  Borpa is a project set up by a DAO. They launched 2 rounds of
                  fund-raising, raising more than 1.3M, and then made 2
                  launches. The first at 80m capitalization and the second at
                  30m. With over 500k followers on Twitter and 50k members on
                  Discord, expectations were high and Ddos attacks were
                  expected. The team consisted of around 20 people, including 4
                  developers.
                </>
              )}
            </>
          ) : swiperIndex === 5 ? (
            <>
              {langageState ? (
                <>
                  Stone Real Estate est une plateforme de tokenisation
                  immobilière. L’équipe derrière ce projet est une agence
                  immobilière. L’objectif est de démocratiser l’investissement
                  immobilier en le rendant plus liquide en permettant de pouvoir
                  investir avec un wallet à partir de seulement 100€
                </>
              ) : (
                <>
                  Stone Real Estate is a real estate tokenization platform. The
                  team behind the project is a real estate agency. The aim is to
                  democratize real estate investment by making it more liquid,
                  allowing you to invest with a wallet from as little as €100.
                </>
              )}
            </>
          ) : swiperIndex === 6 ? (
            <>
              {langageState ? (
                <>
                  Une DAO composé d’influenceurs européens nous a sollicité afin
                  de développer un outil no code pour lancer des smart contracts
                  au standard ERC404 personnalisables
                </>
              ) : (
                <>
                  A DAO made up of European influencers asked us to develop a
                  no-code tool for launching customizable ERC404 standard smart
                  contracts.
                </>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
