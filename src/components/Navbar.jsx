import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: props.active,
        };
    }
    render() {
    return (
        <div>
        <div className='nav'
            onClick={(event) => {
                const isOpen = !this.state.active;
                this.setState({active: isOpen});
            }}>
            <div className={this.state.active ? "burger active" : "burger"}>
                <span></span>
            </div>
        </div>
        <div className={this.state.active ? 'menunav' : 'menunavclose'}>
            <ul className='navlist'>
                <a href='#formation'>
                <li>Formation</li>
                </a>
                <a href='#portfolio'>
                <li>Portfolio</li>
                </a>
                <a href='#experiences'>
                <li>Expériences</li>
                </a>
            </ul>
        </div>
        </div>
        
    )
    }
}

export default Navbar;