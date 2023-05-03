import React from "react";
import Pitch from "./Pitch";
import "./about.css";

import { FaCode } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa";
import { ImFolderOpen } from "react-icons/im";
import { GoCode } from "react-icons/go";

const About = () => {
    return (
        <section id='about'>
            <h2>Om Meg</h2>
            <h5>La Oss Bli Kjent</h5>
            <div className='container about__container'>
                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <GoCode className='about__icon' />
                            <h5>Erfaring Med Kode:</h5>
                            <small>Snart 1 År Med Front-End</small>
                        </article>

                        <article className='about__card'>
                            <FaFileContract className='clients__icon' />
                            <h5>Tidligere Erfaring:</h5>
                            <small>15 År Med Salg</small>
                        </article>

                        <article className='about__card'>
                            <ImFolderOpen className='projects__icon' />
                            <h5>Prosjekter:</h5>
                            <small>5 +</small>
                        </article>
                        <article className='about__card'>
                            <FaCode className='about__icon' />
                            <h5>Kodeklubben på Os:</h5>
                            <small>Aktivt medlem</small>
                        </article>
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
