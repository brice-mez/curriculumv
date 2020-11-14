import React from 'react';
import Portfolio from './Portfolio';
import toyota2 from './images/toyota2.jpg';
import recyclage from './images/recyclage.jpg';
import './Portfolio.css';

const Projets = [
    {
        projetImg: toyota2,
        projetTitre: '24H du Mans',
        projetlink: 'https://nicholas570.github.io/24h/html/home.html'
    },
    {
        projetImg: recyclage,
        projetTitre: 'Recycle is the new Has-Bin'
        
    }
]

const PortfolioList = () => (
    <div className='projet'>
        {Projets.map((projet) => (
            <Portfolio {...projet} key={Projets.projetTitre} 
            />
        ))}
    </div>
);

export default PortfolioList;

