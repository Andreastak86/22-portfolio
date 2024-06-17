import React from "react";
import Pitch from "./Pitch";
import "./about.css";

import { FaCode, FaFileContract } from "react-icons/fa";
import { ImFolderOpen } from "react-icons/im";
import { GoCode } from "react-icons/go";
import { IoRestaurant } from "react-icons/io5";
import { MdHomeWork } from "react-icons/md";

const cardData = [
    {
        icon: <GoCode className='about__icon' />,
        title: "Erfaring Med Kode:",
        content: "2 År med front- og backend",
    },
    {
        icon: <FaFileContract className='about__icon' />,
        title: "Tidligere Erfaring:",
        content: "15 År Med Salg",
    },
    {
        icon: <ImFolderOpen className='about__icon' />,
        title: "Prosjekter:",
        content: "20 +",
    },
    {
        icon: <FaCode className='about__icon' />,
        title: "Kodeklubben på Os:",
        content: "Aktivt Medlem",
    },
    {
        icon: <MdHomeWork className='about__icon' />,
        title: "Tidligere ansatt i Weld IT AS:",
        content: "Utviklingsleder",
    },
    {
        icon: <IoRestaurant className='about__icon' />,
        title: "Hobbykokk:",
        content: "Sunn og God Mat lagd fra start",
    },
];

const About = () => {
    return (
        <section id='about'>
            <h2>Om Meg</h2>
            <h5>La Oss Bli Kjent</h5>
            <div className='container about__container'>
                <div className='about__content'>
                    <div className='about__cards'>
                        {cardData.map((card, index) => (
                            <article className='about__card' key={index}>
                                {card.icon}
                                <h5>{card.title}</h5>
                                <small>{card.content}</small>
                            </article>
                        ))}
                    </div>
                    <Pitch />
                    <div className='contact-btn'>
                        <a href='#contact' className='btn btn-contact'>
                            Kom I Kontakt
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
