import React, { useState, useEffect, useRef } from "react";
import CV from "../../assets/CV Andreas Takvam.pdf";
import DetailedCV from "../../assets/CV Andreas Takvam lang.pdf";

const CTA = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setDropdownVisible(false);
        }
    };

    const handleItemClick = () => {
        setDropdownVisible(false);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className='cta' ref={dropdownRef}>
            <button onClick={toggleDropdown} className='btn'>
                Last Ned CV
            </button>
            <div
                className={`dropdown-content ${dropdownVisible ? "show" : ""}`}
            >
                <a
                    href={CV}
                    download
                    className='dropdown-item'
                    onClick={handleItemClick}
                >
                    Last Ned CV
                </a>
                <a
                    href={DetailedCV}
                    download
                    className='dropdown-item'
                    onClick={handleItemClick}
                >
                    Last Ned Utfyllende CV
                </a>
            </div>
            <a href='#contact' className='btn'>
                Kontakt Meg
            </a>
        </div>
    );
};

export default CTA;
