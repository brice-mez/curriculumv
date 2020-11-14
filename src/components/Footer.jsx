import React from 'react';
import './Footer.css';
import MezeretteBrice from './images/MezeretteBrice.pdf';

const Footer = () => {
    return(
        <div className='footer'>
            <p className='email'>brice.mezerette.pro@gmail.com</p>
            <p className='num'>07.82.21.47.39</p>
            <a href={MezeretteBrice}>
            <p className='cv'>Curriculum vitae</p>
            </a>
        </div>
    )
}

export default Footer;