import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    return (
        <div className="NavBar">
            
            <NavLink exact activeClassName="active" to="/home" >HomePage</NavLink><br></br>
            <NavLink exact activeClassName="active" to="/boards" >My Boards</NavLink>
            <br></br>
            <NavLink exact activeClassName="active" to="/boards/new" >New Board</NavLink>
            <br></br>

            </div>
        )
    }

export default NavBar;



