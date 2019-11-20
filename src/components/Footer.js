import React from 'react'
import './Footer.css'
import {
    NavLink
} from "react-router-dom"
function Footer() {
    return (
        <div>
            <div className="container-fluid footer">
                <div className="row">
                    <div className="col-md-12 ">
                        <p className="footerSpan1"><span className="footerspan"> <NavLink className="navLink" to="/" exact={true} activeClassName='is-active'>Home &nbsp;&nbsp;&nbsp; :</NavLink></span>
                            <span className="footerspan"> <NavLink className="navLink" to="/About" exact={true} activeClassName='is-active'>About &nbsp;&nbsp;&nbsp; :</NavLink></span>
                            <span className="footerspan"> <NavLink className="navLink" to="/Team" exact={true} activeClassName='is-active'>Team  &nbsp;&nbsp;&nbsp;&nbsp; :</NavLink></span>
                            <span className="footerspan"> <NavLink className="navLink" to="/Portfolio" exact={true} activeClassName='is-active'>Portfolio &nbsp;&nbsp; :</NavLink></span>
                            <span className="footerspan"> <NavLink className="navLink" to="/Contact" exact={true} activeClassName='is-active'>Contact</NavLink></span></p>
                            <p>Copyright <span>&#169;</span>	Your Company 2019. All Rights Reserved </p>
                    </div>
                   
                </div>

            </div>
        </div>
    )
}
export default Footer