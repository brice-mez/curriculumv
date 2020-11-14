import React from 'react';
import './Header.css';
import photocv2 from './images/photocv2.png';
import github2 from './images/github2.svg';
import linkedin from './images/linkedin.svg';
import Navbar from './Navbar';

class Header extends React.Component {
    

    render() {
    return(
        <div>
            <Navbar />
            <h1 className='title'>Développeur <span>web</span></h1>
            <div class="avatar">
                <img src={photocv2} alt="Photo du
                    candidat" className="photo-avatar"/>
            </div>
            <div className='reseaux'>
                <a href="https://github.com/brice-mez">
                <img src={github2} alt='icon github' className='github'/>
                </a> 
                <a href="https://www.linkedin.com/in/brice-mezerette-b9412a1a6/">
                <img src={linkedin} alt='icon linkedin' className='linkedin' />
                </a>
            
            </div>
        
        </div>
    )
}
}

export default Header;