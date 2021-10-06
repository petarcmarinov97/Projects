import React from "react";
import "../Styles/Navbar/Navbar.css";

const Navbar = () => {
    return (
        <header>
            <div className="content">
            <div className="sub_media">
                <div className="nav_wrapperLeft">
                    <a className="logo" href="/">
                        <img src="https://i.ibb.co/BsWxtKs/logo-small.png" alt="movies" />
                    </a>
                    <ul className="dropdown_menu">
                        <div className="dropdown">
                                <button className="dropbtn">Categories</button>
                                <div className="dropdown-content">
                                    <a href="/movies">Movies</a>
                                    <a href="/shows">TV Shows</a>
                                </div>
                            </div>
                    </ul>
                </div>
            <div className="nav_wrapperRight">
                    <ul className="primary">
                        <li>
                            <a className="favourites" href="/favourites">
                                Favourites
                            </a>
                        </li>
                        <li>
                            <a href="/watchlist">
                                Watchlist
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    );
}
 
export default Navbar;