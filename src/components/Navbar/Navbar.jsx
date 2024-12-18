import React from 'react';
import classes from './Navbar.module.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <Link to="/profile">Profile</Link>
        </div>
        <div className={classes.item}>
            <Link to="/dialogs">Messages</Link>
        </div>
        <div className={classes.item}>
            <Link>News</Link>
        </div>
        <div className={classes.item}>
            <Link>Music</Link>
        </div>
        <div className={classes.item}>
            <Link>Settings</Link>
        </div>
    </nav>
}

export default Navbar;