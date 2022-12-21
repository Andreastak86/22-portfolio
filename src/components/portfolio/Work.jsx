import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/BAC.jpg";

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
];

const Work = () => {
    return (
        <section id='portfolio'>
            <h5>Som frontend developer i Kodeverket Bergen</h5>
            <h2>Nettsider jeg har vært med å lage</h2>

            <Swiper
                className='container portfolio__container'
                // install Swiper modules
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
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className='portfolio__item-cta'>
                                <a
                                    href={webside}
                                    className='btn'
                                    target='_blank'
                                    rel='noreferrer'
                                    alt='Bergen Armwrestling Club nettside'
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