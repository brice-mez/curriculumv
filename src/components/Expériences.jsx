import React from 'react';
import './Expériences.css';

class Expériences extends React.Component {
    render() {
        const { label, entreprise, lieu, poste, description, date } = this.props;
        return (
            
                <div className='experience-carte'> 
                    <h3 className='label'>{label}</h3>
                    <h3 className='entreprise'>{entreprise}</h3>
                    <p>{date}</p>
                    <p>{lieu}</p>
                    <p>{poste}</p>
                    <p>{description}</p>
                </div>
            
        )
    }
}

export default Expériences;