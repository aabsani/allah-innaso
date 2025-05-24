import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "../index.css";

import { Pagination } from "swiper/modules";

export default function Services() {
  return (
    <>
      <section className="services">
        <div className="background-img-container">
          <img src="/images/background-cover-3.jpg" />
        </div>
        <div className="services-overlay">
          <h1>Our Services</h1>
          <p>
            At Allah Inna'so, we are major dealers in all kinds of frozen foods
            including poultry, fish, meat, french fries and seafood products all
            sourced from trusted producers and maintained under strict hygienic
            and temperature-controlled conditions to preserve freshness, taste,
            and nutritional value.
          </p>
          <Link to="/contact">
            <button className="btn-home">
              <div className="home-about">Contact Us</div>
              <div>
                <FaArrowRight />
              </div>
            </button>
          </Link>
        </div>

        {/* carousel slider */}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          pagination={{ clickable: true }}
          loop={true}
          modules={[Pagination]}
          className="services-slider"
        >
          <SwiperSlide>
            <h2>Delivery & Excellence</h2>
            <p>
              We are committed to delivering excellence by adhering to best
              practices in food safety, logistics, and customer service. With a
              focus on reliability and timely delivery, we ensure that our
              clients consistently receive premium products that meet their
              health standards and culinary expectations.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h2>Quality Frozen Foods</h2>
            <p>
              Our diverse product range includes frozen foods such as: whole
              turkey, turkey parts, turkey gizzard chicken.
            </p>
            <p>
              Chicken: whole chicken, chicken parts, boneless chicken, chicken
              sausage and chicken gizzard.
            </p>
            <p>
              Fish: cat fish, titus fish, croaker fish, horse marcerel (Kote),
              stock fish (Kpanla).
            </p>
            <p>
              Beef: Frozen Beef Cubes, Beef Steaks, Beef Sausage and other beef
              cuts.
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <h2>Bulk Supply</h2>
            <p>
              We are a trusted supplier of premium frozen food products,
              specializing in the bulk distribution of high-quality fish,
              chicken, French fries, and sausages—delivering dependable
              solutions tailored to the needs of commercial and institutional
              clients.
            </p>
          </SwiperSlide>
        </Swiper>
      </section>
      <section>
        <div className="services-wrapper">
          <div className="wrapper-card">
            <img src="" alt="" />
            <h3>Turkey</h3>
            <p></p>
          </div>

          <div className="wrapper-card">
            <img src="" alt="" />
            <h3>Fish</h3>
            <p></p>
          </div>

          <div className="wrapper-card">
            <img src="" alt="" />
            <h3>Beef</h3>
            <p></p>
          </div>

          <div className="wrapper-card">
            <img src="" alt="" />
            <h3>Chicken</h3>
            <p></p>
          </div>
        </div>
      </section>
    </>
  );
}
