import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import './Header.css';


function Header() {
    return (
        <div className='Header'>
            <ul>

                <h1>Users and their favorite Artists</h1>

            </ul>
        </div>
    );
}

export default Header;