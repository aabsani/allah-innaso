import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../index.css";

import { Pagination } from "swiper/modules";

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
        loop={true}
        modules={[Pagination]}
        className="services-slider"
      >
        <SwiperSlide>
          <h2>Our Company</h2>
          <p>
            At Allah Inna’so Nigeria Limited, we specialize in the supply and
            distribution of high-quality frozen foods to retail outlets,
            hospitality establishments, and individual customers.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p>
            <h2>Our Products</h2>
            Our diverse product range includes frozen foods such as:
            Turkey: Whole Turkey, Blanket, 306, 305, Turkey Parts, Turkey
            Gizzard Chicken: Whole chicken, chicken parts (wings, thighs, and
            drumsticks), boneless chicken (Fillets), chicken sausage, and
            Chicken Gizzard. Fish: Cat Fish, Titus Fish, Croaker Fish, Horse
            Marcerel (Kote), Stock Fish (Kpanla), Shawa, Prawns, Shrimps,
            calamaris, salmon and other varieties of seafood. Beef: Frozen Beef
            Cubes, Beef Steaks, Beef Sausage and other beef cuts. French Fries
            (Chips)
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
