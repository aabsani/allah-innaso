import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import TeamGrid from "../components/TeamGrid";

export default function About() {
  return (
    <div className="content-page">
      <section className="about">
        <h2>Who We Are</h2>
        <p>
          Allah Inna’so Nigeria Limited is a duly registered company with the
          Corporate Affairs Commission of Nigeria, bearing registration number
          RC: A74433. The company stands as a reputable and leading supplier of
          a wide range of high-quality frozen food products. We are committed to
          the efficient supply and distribution of premium frozen foods to
          retail businesses, hospitality institutions and individual clients
          across the country.
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
