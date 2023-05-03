import React from "react";
import "./experience.css";
import { SiHtml5 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMicrosoftoffice } from "react-icons/si";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { SiPowerbi } from "react-icons/si";

const Experience = () => {
    return (
        <section id='experience'>
            <h5>Så Hva Kan Jeg?</h5>
            <h2>Min Erfaring</h2>

            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>Frontend Development</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <SiHtml5 className='experience__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>
                                    God Erfaring
                                </small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiJavascript className='experience__details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>
                                    Blir aldri utlært
                                </small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiCss3 className='experience__details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>
                                    God Erfaring
                                </small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <FiFigma className='experience__details-icon' />
                            <div>
                                <h4>Figma</h4>
                                <small className='text-light'>
                                    God Erfaring
                                </small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <FaReact className='experience__details-icon' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>
                                    Lærer Stadig
                                </small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <TbBrandNextjs className='experience__details-icon' />
                            <div>
                                <h4>NextJS</h4>
                                <small className='text-light'>
                                    Foretrukket rammeverk
                                </small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className='experience__other'>
                    <h3>Andre Erfaringer</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <SiMicrosoftoffice className='experience__details-icon' />
                            <div>
                                <h4>Office 365</h4>
                                <small className='text-light'>
                                    Godt kjent med alle Office 365 programmer
                                </small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <IoCheckmarkCircleOutline className='experience__details-icon' />
                            <div>
                                <h4>SuperOffice</h4>
                                <small className='text-light'>
                                    God erfaring
                                </small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <SiPowerbi className='experience__details-icon' />
                            <div>
                                <h4>PowerBI</h4>
                                <small className='text-light'>
                                    Grunnlegende
                                </small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
