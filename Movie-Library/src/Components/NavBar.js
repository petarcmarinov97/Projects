import React from "react";
import "../Styles/NavBar/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div className="content">
            <div className="sub_media">
                <div className="nav_wrapperLeft">
                    <Link className="logo" to="/">
                        <img src="https://i.ibb.co/BsWxtKs/logo-small.png" alt="movies" />
                    </Link>
                    <ul className="dropdown_menu">
                        <div className="dropdown">
                                <button className="dropbtn">Categories</button>
                                <div className="dropdown-content">
                                    <Link to="/movies">Movies</Link>
                                    <Link to="/tvshows">Tv Shows</Link>
                                </div>
                            </div>
                    </ul>
                </div>
                <div className="nav_wrapperRight">
                    <ul className="primary">
                        <li>
                           <Link to="/search">Search</Link>
                        </li>
                        <li>
                        <Link to="/favourites">Favourites</Link>
                        </li>
                        <li>
                        <Link to="/Watchlist">Watchlist</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    );
}
 
export default Navbar;