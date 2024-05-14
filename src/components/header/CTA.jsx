import React from "react";
import CV from "../../assets/CV 2.pdf";

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>
                Last Ned CV
            </a>
            <a href='#contact' className='btn'>
                Kontakt Meg
            </a>
        </div>
    );
};

export default CTA;
