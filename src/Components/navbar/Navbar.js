import React, { Component } from 'react';
import './Navbar.scss';
//import photo from './profilePhoto1.jpeg'

class Navbar extends Component {

    render() {
        return (
            <div className="nav">
                <div className="nav__header" >
                    <div className="nav__header__logo">
                        <p><span style={{ fontWeight: `600` }}>V</span>ARJISH</p>
                    </div>
                    <ul className="nav__header__list">
                        <li className="nav__header__list__element">
                            Home
                        </li>
                        <li className="nav__header__list__element">
                            Search Gym
                        </li>
                        <li className="nav__header__list__element">
                            <button className="nav__header__list__element__login">Add Gym</button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;
