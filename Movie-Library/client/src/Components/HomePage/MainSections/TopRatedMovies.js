import '../../../Styles/HomePage/MainSections/TopRatedMovies/TopRatedMovies.css';
import React from "react";
import MovieCard from './MovieCard';
import { useEffect, useState } from "react";

const TopRatedMovies = () => {

    const type="movie";
    const [data, setData] = useState([]);

    useEffect(() => {
            fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`)
                .then(res => res.json())
                .then(data =>{
                    if(!data.errors){
                        setData(data.results);
                    }else{
                        setData([]);
                    }
                })
    }, []);

    return (
    <section className="BottomSection">
        <div className="column_wrapper">
            <div className="content_wrapper">
                <div className="column">
                    <div className="column_header">
                        <h2>What's Top Rated Movies</h2>
                    </div>
                    <div className="media">
                        <div className="results">
                        {data.length>0 && (
                        <div className="pageNumber">
                        {data.map(movie=> (
                        <MovieCard key={movie.id} type={type} movie={movie} />
                        ))}
                        </div>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default TopRatedMovies;