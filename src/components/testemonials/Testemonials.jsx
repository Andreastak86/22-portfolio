import React from "react";
import "./testemonials.css";
import T1 from "../../assets/AOC U32.jpg";
import T2 from "../../assets/Arlo.jpg";
import T3 from "../../assets/OP8T.jpg";
import T4 from "../../assets/Phil 272.jpg";
import T5 from "../../assets/Phillips 27E1.jpg";
import T6 from "../../assets/Phillips 24E1.jpg";
import T7 from "../../assets/Phillips 243s1.jpg";

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    avatar: T1,
    name: "AOC U32",
    review: "En perfekt allround skjerm.",
    url: "https://itprox.no/artikkel/35315/produktomtale-aoc-u32p2/",
  },
  {
    avatar: T2,
    name: "Arlo Doorbell",
    review: "For deg som ikke gidd å reise deg når det ringer på.",
    url: "https://itprox.no/artikkel/34542/produkttest-arlo-essential-doorbell/",
  },
  {
    avatar: T3,
    name: "OnePlus 8T",
    review: "OnePlus har gjort det igjen.",
    url: "https://itprox.no/artikkel/32936/test-oneplus-8t/",
  },
  {
    avatar: T4,
    name: "Phillips 272",
    review: "Et godt valg til kontoret.",
    url: "https://itprox.no/artikkel/34829/produktomtale-phillips-272e2/",
  },
  {
    avatar: T5,
    name: "Phillips 27E1",
    review: "Phillips nye 5000-serie viser muskler.",
    url: "https://itprox.no/artikkel/46274/test-philips-27e1n5600he/",
  },
  {
    avatar: T6,
    name: "Phillips 24E1",
    review: "En liten og hendig skjerm til kontoret.",
    url: "https://itprox.no/artikkel/46259/test-phillips-24e1n5300he/",
  },
  {
    avatar: T7,
    name: "Phillips 272",
    review: "En allrounder på 24 tommer.",
    url: "https://itprox.no/artikkel/46241/test-philips-243s1/",
  },
];

const Testemonials = () => {
  return (
    <section id='testemonials'>
      <h5>På Fritiden</h5>
      <h2>Skribent for IT-Pro</h2>

      <Swiper
        className='container testemonials__container'
        // install Swiper modules
        slidesPerView={1}
        spaceBetween={40}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{ clickable: true }}
        navigation={false}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {data.map(({ avatar, name, review, url }, index) => {
          return (
            <SwiperSlide key={index} className='testemonial'>
              <div className='client__avatar'>
                <img src={avatar} alt='Test' />
                <a
                  href={url}
                  className='btn__read'
                  alt='Article'
                  target='_blank'
                  rel='noreferrer'
                >
                  Les
                </a>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testemonials;
