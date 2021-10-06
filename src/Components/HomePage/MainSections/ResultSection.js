import '../../../Styles/HomePage/MainSections/ResultSection/ResultSection.css';
import React from "react";
import MovieCard from './MovieCard'

const ResultSection = ({results}) => {
    
    return (
        <section className="ResultSection">
            <div className="results">
           {results.length>0 && (
               <div className="pageNumber">
                {results.map(movie=>
                (movie.poster_path && (movie.title || movie.name) && (movie.release_date || movie.first_air_date))&&
                (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
                </div>
           )}
            </div>
        </section>
    );
}
 
export default ResultSection;