import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink className={({ isActive }) => isActive && `${classes.active}`} to="/profile">Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/dialogs" className={({ isActive }) => isActive && `${classes.active}`}>Messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/news" className={({ isActive }) => isActive && `${classes.active}`}>News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/music" className={({ isActive }) => isActive && `${classes.active}`}>Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/settings" className={({ isActive }) => isActive && `${classes.active}`}>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;