import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../index.css";

import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* main section on homepage */}
      <section className="home">
        <div className="home-overlay">
          <h1>Welcome to Allah Inna'so Nigeria Limited</h1>
          <p>
            We are a large distributor and major dealer of all kinds of frozen
            foods in Nigeria.
          </p>
          <Link to="/about">
            <button className="btn-home">
              <div className="home-about">About Us</div>
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
          navigation={true}
          loop={true}
          modules={[Pagination, Navigation]}
          className="home-slider"
        >
          <SwiperSlide>
            <img src="/images/background-cover-2.jpg" alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/background-cover.jpg" alt="Slide 2" />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Who we are section on homepage */}
      <section className="about-home-layout">
        <div className="container">
          <div className="inner-wrapper">
            <h1>Who We Are</h1>
            <p>
              At Allah Inna’so Nigeria Limited, we specialize in the supply and
              distribution of high-quality frozen foods to retail outlets,
              hospitality establishments, and individual customers. Our diverse
              product range includes frozen foods such as Turkey, Chicken, Fish
              and Beef in a wide range of variations.
            </p>
            <Link to="/about">
              <button className="btn-home">
                <div className="home-about">More</div>
                <div>
                  <FaArrowRight />
                </div>
              </button>
            </Link>
          </div>
          <div className="about-img-container">
            <img
              src="/images/operations-1.jpeg"
              className="home-images"
              alt="about image"
            />
          </div>
        </div>
      </section>

      {/* Services section on homepage */}
      <section className="services-home-layout">
        <div className="container">
          <div className="inner-wrapper">
            <h1>Our Services</h1>
            <p>
              We are committed to delivering excellence by adhering to best
              practices in food safety, logistics, and customer service. With a
              focus on reliability and timely delivery, we ensure that our
              clients consistently receive premium products that meet their
              health standards and culinary expectations.
            </p>
            <Link to="/services">
              <button className="btn-home">
                <div className="home-about">More</div>
                <div>
                  <FaArrowRight />
                </div>
              </button>
            </Link>
          </div>
          <div className="about-img-container">
            <img
              src="/images/operations-3.jpeg"
              className="home-images"
              alt="about image"
            />
          </div>
        </div>
      </section>
    </>
  );
}
