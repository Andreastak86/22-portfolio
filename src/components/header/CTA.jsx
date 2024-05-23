import React, { useState } from "react";
import CV from "../../assets/CV 2.pdf";
import DetailedCV from "../../assets/CV-long.pdf"; // Legg til stien til den utfyllende CVen

const CTA = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <div className='cta'>
            <div className='dropdown'>
                <button onClick={toggleDropdown} className='btn'>
                    Last Ned CV
                </button>
                {dropdownVisible && (
                    <div className='dropdown-content'>
                        <a href={CV} download className='dropdown-item'>
                            Last Ned CV
                        </a>
                        <a href={DetailedCV} download className='dropdown-item'>
                            Last Ned Utfyllende CV
                        </a>
                    </div>
                )}
            </div>
            <a href='#contact' className='btn'>
                Kontakt Meg
            </a>
        </div>
    );
};

export default CTA;
