import React from "react";
import "./header.css";
import CTA from "./CTA";
import PIC from "../../assets/funny-profile.png";
import HeaderSOME from "./HeaderSOME";

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hei! Her Er Jeg</h5>
        <h1>Andreas Takvam</h1>
        <h5 className='text-light'>Front-End Utvikler</h5>
        <CTA />
        <HeaderSOME />
        <div className='profile-pic'>
          <img src={PIC} alt='me' />
        </div>
      </div>
    </header>
  );
};

export default Header;
