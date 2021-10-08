import React from "react";
import "../Styles/NavBar/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ email, isAuthenticated }) => {
    return (
        <header>
            <div className="content">
            <div className="sub_media">
                <div className="nav_wrapperLeft">
                    <Link className="logo" to="/">
                        <img src="https://i.ibb.co/1qJjFhB/11300fddc62b471ab8b882206559b119-2.png"  alt="movies" />
                    </Link>
                    <ul className="dropdown_menu">
                        <div className="dropdown">
                                <button className="dropbtn">Categories</button>
                                <div className="dropdown-content">
                                    <Link to="/movies">Movies</Link>
                                    <Link to="/tvshows">TV Shows</Link>
                                </div>
                            </div>
                    </ul>
                </div>
                <div className="nav_wrapperRight">
                    <ul className="primary">
                        {isAuthenticated
                        ? <li className="greeting" >Welcome, {email}</li>
                        : <li className="greeting" >Welcome, Guest</li>}
                        <li>
                           <Link to="/search">Search</Link>
                        </li>
                        <li>
                            <Link to="/favourites">Favourites</Link>
                        </li>
                        <li>
                            <Link to="/watchlist">Watchlist</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link to="/logout">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    );
}
 
export default Navbar;