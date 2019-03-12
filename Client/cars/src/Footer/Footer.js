import React from 'react';

import './Footer.css';


const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer id="footer">
            <a href="https://www.mercedes-benz.com/en/">
                © More Cars {year}
            </a>
        </footer>
    );
};

export default Footer;