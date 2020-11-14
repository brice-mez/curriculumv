import React from 'react';
import './Formation.css';
import html2 from './images/html2.svg';
import css3 from './images/css3.svg';
import reacticons from './images/reacticons.svg';
import javascript from './images/javascript.svg';

function Formation () {
    return(
        <div className='formation'>
            <h2 id='formation'>Formation</h2>
            <div className='carteFormation'>
                <h3>Wild Code School</h3>
                <h4>Développeur web et mobile</h4>
                <p className='formparag'>Formation de développeur web à la Wild Code School depuis Septembre 2020.
                Apprentissage de REACTJS mais également de méthodes de travail et de collaboration (ex: SCRUM).</p>
            </div>
            <div className='iconbar'>
                <img src={html2} alt='icon html'/>
                <img src={css3} alt='icon css'/>
                <img src={javascript} alt='icon javascript'/>
                <img src={reacticons} alt='icon react'/>
            </div>
        </div>
    )
}

export default Formation;