import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/drum-kit.jpg";
import IMG2 from "../../assets/collatz.jpg";
import IMG3 from "../../assets/to-do.jpg";
import IMG4 from "../../assets/Cta-oppgave.jpg";
import IMG5 from "../../assets/Solsystemet.jpg";

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
        title: "Trommesett",
        github: "https://github.com/Andreastak86/Drum-kit.2.0",
        demo: "https://andreastak86.github.io/Drum-kit.2.0/",
    },
    {
        id: 2,
        image: IMG2,
        title: "Collatz Ligning",
        github: "https://github.com/Andreastak86/Collatz-Oppgave",
        demo: "https://andreastak86.github.io/Collatz-Oppgave",
    },
    {
        id: 3,
        image: IMG3,
        title: "To-Do Liste",
        github: "https://github.com/Andreastak86/To-Do-List-2808",
        demo: "https://andreastak86.github.io/To-Do-List-2808/",
    },
    {
        id: 4,
        image: IMG4,
        title: "CTA Knapp",
        github: "https://github.com/Andreastak86/Oppgave-planleggingsuke",
        demo: "https://andreastak86.github.io/Oppgave-planleggingsuke/",
    },
    {
        id: 5,
        image: IMG5,
        title: "Solsystemet",
        github: "https://github.com/Andreastak86/Solsytemet",
        demo: "https://andreastak86.github.io/Solsytemet/",
    },
];

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>Dette har jeg jobbet med den siste tiden</h5>
            <h2>Min Portefølje</h2>

            <Swiper
                className='container portfolio__container'
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
                {data.map(({ id, image, title, github, demo }) => {
                    return (
                        <SwiperSlide key={id} className='portfolio__item'>
                            <div className='portfolio__item-image'>
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className='portfolio__item-cta'>
                                <a
                                    href={github}
                                    className='btn'
                                    target='_blank'
                                    rel='noreferrer'
                                    alt='Drum-kit project'
                                >
                                    GitHub
                                </a>
                                <a
                                    href={demo}
                                    className='btn btn-primary'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    Live Demo
                                </a>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Portfolio;
