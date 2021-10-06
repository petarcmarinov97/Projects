import "../../../Styles/HomePage/MainSections/SearchSection/SearchSection.css";

import React from "react";

const SearchSection = ({onChange}) => {

    return (
    <section className="inner_contentOne">
        <div className="media_discover">    
           <div className="column_wrapper">
            <div className="content_wrapper">
                <div className="title">
                    <h2>Welcome</h2>
                    <h3>Millions of movies, TV shows to discover. Explore now</h3>
                </div>
                <div className="search">
                    <label>
                    <input
                    className="search" 
                    type="text" 
                    name="search"
                    placeholder="Search for a movie, tv show..."
                    onChange={onChange}
                    />
                    </label>
                </div>
             </div>
            </div>
        </div>
    </section>  
        

);
}
 
export default SearchSection;