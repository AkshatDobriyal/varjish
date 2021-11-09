import React, { Component } from 'react';
import './Navbar.scss';
import {useApp} from "../../Context/AppContext";
import { NavLink } from 'react-router-dom';
import {getRole} from '../../services/localStorageServices'
//import photo from './profilePhoto1.jpeg'

function Navbar()  {
const {loggedInData}=useApp()
console.log(loggedInData)
return (
    <div className="nav">
        <div className="nav__header" >
            <div className="nav__header__logo">
                <p><span style={{ fontWeight: `600` }}>V</span>ARJISH</p>
            </div>
            <ul className="nav__header__list">
            
                <NavLink to = {getRole() === "TRAINER" ? "/trainerDashboard" : "/dashboard"} className="nav__header__list__element">
                <li >
                    Home
                </li>
                </NavLink>
                <NavLink to = "/searchGym" className="nav__header__list__element">
                <li >
                    Search Gym
                </li></NavLink>
                {/* <li className="nav__header__list__element">
                    <button className="nav__header__list__element__login">Add Gym</button>
                </li> */}
                
            </ul>
        </div>
    </div>
);
}

export default Navbar;
