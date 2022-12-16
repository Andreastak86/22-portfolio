import React from "react";
import "./services.css";
import { BsCheckLg } from "react-icons/bs";

const Services = () => {
  return (
    <section id='services'>
      <h5>Så hva kan jeg tilby?</h5>
      <h2>La oss se!</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Figma Design</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Blender</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Adobe Lr</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Frontend</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>HTML</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>CSS</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>JavaScript</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Andre</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Office 365</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>SuperOffice</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Windows</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
