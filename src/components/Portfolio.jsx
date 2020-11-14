import React from 'react';
import './Portfolio.css';

const Portfolio = (props) => {

        return (
            <a href={props.projetlink}>
            <div className='carte-projet'>
                <div className='img-projet'>
                    <img className='img' src={props.projetImg} alt={props.projetTitre}/>
                </div>
                <div className='titre-projet'>
                    <h3 className="titre">{props.projetTitre}</h3>
                </div>
                    <p className='parag'>(Projet réalisé en groupe)</p>
            </div>
            </a>
        )
    }


export default Portfolio;

