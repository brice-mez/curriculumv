import React from 'react';
import Expériences from './Expériences';

const experiences = [
    {
        label: 'Compagnie',
        entreprise: 'Brittany Ferries',
        lieu: 'Angleterre-France-Espagne',
        poste: 'Matelot',
        description: 'Transport de passagers',
        date: 'Décembre 2015 à Septembre 2020'
    },
    {
        label: 'Armement',
        entreprise: 'Penn Kalet',
        lieu: 'Saint-Malo',
        poste: 'Matelot',
        description: `Pêche à l'araignée`,
        date: 'Juillet 2015 à Décembre 2015'
    },
    {
        label: 'Entreprise',
        entreprise: 'Simon Mytiliculture',
        lieu: 'Baie du Mont-Saint-Michel',
        poste: 'Ouvrier mytilicole',
        description: 'Pêche et conditionnement des moules',
        date: 'Emploi saisonnier',
    }
]

const ExpériencesList = () => (
    <div className='experience'>
        {experiences.map((experience) => (<Expériences {...experience} key={experiences.entreprise}/>
        ))}
    </div>
)

export default ExpériencesList;