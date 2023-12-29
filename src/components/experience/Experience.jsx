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

const ExperienceCategory = ({ title, items }) => (
    <div className='experience__category'>
        <h3>{title}</h3>
        <ul className='experience__list'>
            {items.map((item, index) => (
                <li key={index} className='experience__details'>
                    <item.Icon className='experience__details-icon' />
                    <div>
                        <h4>{item.title}</h4>
                        <small className='text-light'>{item.experience}</small>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

const Experience = () => {
    const frontendItems = [
        { Icon: SiHtml5, title: "HTML", experience: "God Erfaring" },
        {
            Icon: SiJavascript,
            title: "JavaScript",
            experience: "Blir aldri utlært",
        },
        { Icon: SiCss3, title: "CSS", experience: "God Erfaring" },
        { Icon: FiFigma, title: "Figma", experience: "God Erfaring" },
        { Icon: FaReact, title: "React", experience: "Lærer Stadig" },
        {
            Icon: TbBrandNextjs,
            title: "NextJS",
            experience: "Foretrukket rammeverk",
        },
    ];

    const otherItems = [
        {
            Icon: SiMicrosoftoffice,
            title: "Office 365",
            experience: "Godt kjent med alle Office 365 programmer",
        },
        {
            Icon: IoCheckmarkCircleOutline,
            title: "SuperOffice",
            experience: "God erfaring",
        },
        { Icon: SiPowerbi, title: "PowerBI", experience: "Grunnleggende" },
    ];

    return (
        <section id='experience'>
            <h5>Så Hva Kan Jeg?</h5>
            <h2>Min Erfaring</h2>

            <div className='container experience__container'>
                <ExperienceCategory
                    title='Frontend Development'
                    items={frontendItems}
                />
                <ExperienceCategory
                    title='Andre Erfaringer'
                    items={otherItems}
                />
            </div>
        </section>
    );
};

export default Experience;
