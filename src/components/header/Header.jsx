import React from "react";
import "./header.css";
import CTA from "./CTA";
import PIC from "../../assets/funny-profile.png";
import HeaderSOME from "./HeaderSOME";
import Typing from "./Typing.jsx";

const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                <h5>Hei! Her Er Jeg</h5>
                <h1>Andreas Takvam</h1>

                <Typing className='text-light' />
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
