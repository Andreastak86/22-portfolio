import React from "react";
import "./footer.css";
// import { FaToiletPaper } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <a href='#top' className='footer__logo'>
                Andreas Takvam
            </a>
            <ul className='permalinks'>
                <li>
                    <a href='#about'>Om Meg</a>
                </li>
                <li>
                    <a href='#experience'>Erfaring</a>
                </li>
                <li>
                    <a href='#services'>Hva Jeg Kan</a>
                </li>
                <li>
                    <a href='#portfolio'>Portefølje</a>
                </li>
                <li>
                    <a href='#testemonials'>IT-Pro Tester</a>
                </li>
                <li>
                    <a href='#contact'>Kontakt Meg</a>
                </li>
            </ul>

            {/* <div className='footer__socials'>
        <a href='https://bt.no'>
          <FaToiletPaper />
        </a>
        <a href='https://vg.no'>
          <FaToiletPaper />
        </a>
        <a href='https://nrk.no'>
          <FaToiletPaper />
        </a>
      </div> */}

            <div className='footer__copyright'>
                <small>&copy; Andreas Takvam 2023</small>
            </div>
        </footer>
    );
}

export default Footer;
