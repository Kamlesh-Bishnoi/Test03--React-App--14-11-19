import React from 'react'
import {
    NavLink
} from "react-router-dom"
import './Header.css'
class Header extends React.Component {
    render() {
        return (
            <div className="Sticky">
                <nav className="navbar navbar-expand-md   navbar-dark navbar1  ">
                    <div className="container">
                        <img className="logoIcon" src="https://www.designfreelogoonline.com/wp-content/uploads/2016/03/00106-3D-company-logo-design-free-logo-online-Template-03.png" alt="Logo-Icon" ></img>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse navAlign margin" id="collapsibleNavbar">

                            <ul className="navbar-nav ">
                                <li>
                                    <NavLink className="navLink" to="/" exact={true} activeClassName='is-active'>Home</NavLink>
                                </li>
                                <li >
                                    <NavLink className="navLink" to="/About" exact={true} activeClassName='is-active'>About</NavLink>
                                </li>
                                <li >
                                    <NavLink className="navLink" to="/Team" exact={true} activeClassName='is-active'>Team</NavLink>
                                </li>
                                <li>
                                    <NavLink className="navLink" to="/Portfolio" exact={true} activeClassName='is-active'>Portfolio</NavLink>
                                </li>
                                <li >
                                    <NavLink className="navLink" to="/Contact" exact={true} activeClassName='is-active'>Contact</NavLink>
                                </li>
                            </ul>

                        </div></div>
                </nav>


            </div>

        )
    }
}
export default Header