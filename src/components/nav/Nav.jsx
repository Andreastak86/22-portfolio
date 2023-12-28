import React from "react";
import "./nav.css"; // Ensure you import your CSS file
import { ImHome } from "react-icons/im";
import { GoPerson } from "react-icons/go";
import { MdContactPage } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { useState } from "react";

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");

    return (
        <nav>
            <a
                href='#top'
                onClick={() => setActiveNav("#")}
                className={activeNav === "#" ? "active" : ""}
                aria-current={activeNav === "#" ? "page" : undefined}
            >
                <ImHome size={24} />
            </a>
            <a
                href='#about'
                onClick={() => setActiveNav("#about")}
                className={activeNav === "#about" ? "active" : ""}
                aria-current={activeNav === "#about" ? "page" : undefined}
            >
                <GoPerson size={24} />
            </a>
            <a
                href='#services'
                onClick={() => setActiveNav("#services")}
                className={activeNav === "#services" ? "active" : ""}
                aria-current={activeNav === "#services" ? "page" : undefined}
            >
                <MdContactPage size={24} />
            </a>
            <a
                href='#portfolio'
                onClick={() => setActiveNav("#portfolio")}
                className={activeNav === "#portfolio" ? "active" : ""}
                aria-current={activeNav === "#portfolio" ? "page" : undefined}
            >
                <FaBook size={24} />
            </a>
            <a
                href='#contact'
                onClick={() => setActiveNav("#contact")}
                className={activeNav === "#contact" ? "active" : ""}
                aria-current={activeNav === "#contact" ? "page" : undefined}
            >
                <IoMdContacts size={24} />
            </a>
        </nav>
    );
};

export default Nav;
