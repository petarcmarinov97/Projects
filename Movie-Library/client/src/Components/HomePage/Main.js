import "../../Styles/HomePage/Main/Main.css";
import React from "react";
import TopRatedMovies from "./MainSections/TopRatedMovies";
import PopularTvShows from "./MainSections/PopularTvShows";

const Main = () => {

    return (
        <main> 
            <TopRatedMovies />
            <PopularTvShows />
        </main>
        
    );
}
 
export default Main