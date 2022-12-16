import React from "react";
// import { IconContext } from "react-icons";
import { FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

const HeaderSOME = () => {
  return (
    <div className='header__some'>
      <a
        href='https://www.linkedin.com/in/andreas-takvam-623068a4/'
        target='_blank'
        rel='noreferrer'
      >
        <FiLinkedin color='white' size={30} opacity='60%' />
      </a>
      <a
        href='https://github.com/Andreastak86'
        target='_blank'
        rel='noreferrer'
      >
        <FiGithub color='white' size={30} opacity='60%' />
      </a>
      <a
        href='https://www.facebook.com/andreas.takvam'
        target='_blank'
        rel='noreferrer'
      >
        <FiFacebook color='white' size={30} opacity='60%' />
      </a>
      <a
        href='https://www.instagram.com/atakv/'
        target='_blank'
        rel='noreferrer'
      >
        <FiInstagram color='white' size={30} opacity='60%' />
      </a>
    </div>
  );
};

export default HeaderSOME;
