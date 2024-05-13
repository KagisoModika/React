import React from "react";
import reactLogo from '../images/logo.svg';

export default function NavBar() {
    return(
        <div className="NavBar">
            <header>
                <img src={reactLogo} className="Nav-logo" alt="React Logo" />
                <p className="Nav-menu">App Menu</p>
            </header>
        </div>
    );
}