import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../index.css";

import { Pagination, Navigation } from "swiper/modules";

export default function Services() {
  return (
    <section className="services">
      <div className="background-img-container">
        <img src="/images/background-cover-3.jpg" />
      </div>
      <div className="services-overlay">
        <h2>Our Services</h2>
        <p>
          We are major dealers in all kinds of frozen foods including poultry,
          fish, meat, and seafood products.
        </p>
      </div>

      {/* carousel slider */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation]}
        className="services-slider"
      >
        <SwiperSlide>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure ut
            repellendus veniam numquam perferendis nemo dolor laboriosam vitae,
            voluptate quod quo quos recusandae, amet, aperiam soluta sapiente
            pariatur voluptatem quae.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium vitae amet commodi quam, voluptate optio laboriosam quia
            minima veritatis, adipisci impedit quos iste a harum, et sapiente
            consequuntur eius! Modi!
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
