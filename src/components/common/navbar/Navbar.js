import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link
                className="navbar-brand"
                to="/"
            >
                <img src='./assets/football-strike.png' alt='logo' />
            </Link>

            <div className="navbar-nav w-75 justify-content-around">
                <NavLink
                    activeClassName="active"
                    className="nav-item nav-link"
                    exact
                    to="/players"
                >
                    <h2>Players</h2>
                </NavLink>

                <NavLink
                    activeClassName="active"
                    className="nav-item nav-link"
                    exact
                    to="/teams"
                >
                    <h2>Teams</h2>
                </NavLink>
            </div>
        </nav>
    )
}