import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import TeamGrid from "../components/TeamGrid";

export default function About() {
  return (
    <div className="content-page">
      <section className="about">
        <h2>Who Are We?</h2>
        <p>
          Allah Inna'so Nigeria Limited is a leading supplier of a diverse range
          of frozen food products. At Allah Inna'so, we specialize in the supply
          and distribution of high-quality frozen foods to retail outlets,
          hospitality establishments, and individual customers.
        </p>
        <div className="statement-cards">
          <div className="mission">
            <h3>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
              Mission Statement
            </h3>
            <p>
              To provide our customers with premium-quality, health-conscious
              frozen food products through reliable supply chains, exceptional
              service, and a steadfast commitment to food safety and excellence.
            </p>
          </div>
          <div className="vision">
            <h3>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
              Vision Statement
            </h3>
            <p>
              To become the leading provider of healthy and premium frozen
              foods, recognized for quality, integrity, and innovation in food
              distribution across Nigeria and beyond.
            </p>
          </div>
        </div>
        <section className="about-img">
          <div className="img-container"></div>
        </section>
        <div className="team-wrapper">
          <h2>Meet Our Team</h2>
          <TeamGrid />
        </div>
      </section>
    </div>
  );
}
