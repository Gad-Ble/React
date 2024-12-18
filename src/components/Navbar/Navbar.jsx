import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink className={({ isActive }) =>
                isActive ? `${classes.link} ${classes.active}` : classes.link
            } to="/profile">Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/dialogs" className={({ isActive }) =>
                isActive ? `${classes.link} ${classes.active}` : classes.link
            }>Messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/news" className={({ isActive }) =>
                isActive ? `${classes.link} ${classes.active}` : classes.link
            }>News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/music" className={({ isActive }) =>
                isActive ? `${classes.link} ${classes.active}` : classes.link
            }>Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/settings" className={({ isActive}) =>
                isActive ? `${classes.active}` : classes.link
            }   >Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;