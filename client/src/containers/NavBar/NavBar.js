import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import classes from './NavBar.module.css'
class NavBar extends Component {
    render() {
        return (
            <div>
                <div className={classes.Sidebar}>
                    <NavLink to='/profile'>Home</NavLink>
                    <NavLink to='/profile'>topArtist</NavLink>
                    <NavLink to='/profile'>topTracks</NavLink>
                    <NavLink to='/profile'>Recent</NavLink>
                </div>
            </div>
        );
    }
}

export default NavBar;