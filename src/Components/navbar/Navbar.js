import React, { Component } from 'react';
import './Navbar.scss';
import {useApp} from "../../Context/AppContext";
import {NavLink, useHistory} from 'react-router-dom';
//import photo from './profilePhoto1.jpeg'

function Navbar()  {
const {loggedInData}=useApp()
console.log(loggedInData,'ggwp')
    const history = useHistory()
    const {setLoggedInData} = useApp()
return (
    <div hidden={loggedInData===null}>
    <div className="nav">
        <div className="nav__header" >
            <div className="nav__header__logo">
                <p><span style={{ fontWeight: `600` }}>V</span>ARJISH</p>
            </div>
            <ul className="nav__header__list" >

                <NavLink to = {loggedInData?.role === "TRAINER" ? "/trainerDashboard" : "/dashboard"} className="nav__header__list__element">
                <li >
                    Home
                </li>
                </NavLink>
                <NavLink to = "/searchGym" className="nav__header__list__element" id="search_gym">
                <li >
                    Search Gym
                </li></NavLink>
                <span className="nav__header__list__element ">
                    <li className='cursor-pointer' onClick={
                        ()=> {
                            setLoggedInData(null)
                            localStorage.removeItem('userLoggedInData')
                            history.push('/')

                        }

                        }>
                        Log Out
                    </li></span>
                {/* <li className="nav__header__list__element">
                    <button className="nav__header__list__element__login">Add Gym</button>
                </li> */}
                
            </ul>
        </div>
    </div>
    </div>
);
}

export default Navbar;
