import React from "react";
import "./work.css";
import IMG1 from "../../assets/BAC.jpg";
import IMG2 from "../../assets/forny-hero.png";
import IMG3 from "../../assets/noen-hero.png";
import IMG4 from "../../assets/kodeverket-hero.png";
import IMG5 from "../../assets/IMG5.png";

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
    {
        id: 1,
        image: IMG1,
        title: "Bergen Armwrestling Club",
        webside: "https://bergenarmwrestling.no",
    },
    {
        id: 2,
        image: IMG2,
        title: "Forny Norge AS",
        webside: "https://www.fornynorge.no/",
    },
    {
        id: 3,
        image: IMG3,
        title: "Noen AS",
        webside: "https://www.noen-as.no/",
    },
    {
        id: 4,
        image: IMG4,
        title: "Kodeverket sin hjemmeside",
        webside: "https://www.kodeverketbergen.no",
    },
    {
        id: 5,
        image: IMG5,
        title: "Ny nettside Kodehode",
        webside: "https://www.kodehode.no",
    },
];

const Work = () => {
    return (
        <section id='portfolio'>
            <h5>
                Frontend developer,
                <br /> prosjektleder i Kodeverket Bergen
            </h5>
            <h2>Nettsider vi har jobbet med:</h2>

            <Swiper
                className='container portfolio__container'
                slidesPerView={1}
                spaceBetween={40}
                loop={false}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
                pagination={{ clickable: true }}
                navigation={false}
                modules={[Navigation, Pagination, Autoplay]}
            >
                {data.map(({ id, image, title, webside }) => {
                    return (
                        <SwiperSlide key={id} className='portfolio__item'>
                            <div className='portfolio__item-image'>
                                <img
                                    src={image}
                                    alt={`Screenshot of ${title} website`}
                                />
                            </div>
                            <h3>{title}</h3>
                            <div className='portfolio__item-cta'>
                                <a
                                    href={webside}
                                    className='btn'
                                    target='_blank'
                                    rel='noreferrer'
                                    alt={`${title} website`}
                                >
                                    Webside
                                </a>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Work;
