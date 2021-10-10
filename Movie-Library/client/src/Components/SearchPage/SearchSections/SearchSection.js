import "../../../Styles/SearchPage/SearchSection/SearchSection.css";
import React from "react";
import { useState } from "react";
import ResultSection from "./ResultSection";


const SearchSection = () => {

    const [query, setQuerry] = useState("");
    const [results, setResults] = useState([]);

    const onChange = (e) => {
        e.preventDefault();

        setQuerry(e.target.value);
        
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=${e.target.value}&page=1&include_adult=false`)
            .then(res => res.json())
            .then(data => {
                if (!data.errors) {
                    setResults(data.results);
                } else {
                    setResults([]);
                }
            });
    };


    return (
        <section className="searchSection">
            <div className="title">
                <h2>Welcome</h2>
                <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
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
                    <ResultSection results={results}/>
                </div>
        </section>
                
                );
}
 
export default SearchSection;