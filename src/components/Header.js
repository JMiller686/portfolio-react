import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>JM Designs</h1>
        <nav>
            <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
            <NavLink to="/portfolio" activeClassName="is-active" exact={true}>Portfolio</NavLink>
            <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
        </nav>
    </header>
);

export default Header;