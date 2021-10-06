import '../../../Styles/HomePage/MainSections/MovieCard/MovieCard.css';
import React from "react";

const MovieCard = ({movie}) => {
    return (
        <div key={movie.id} id={movie.id} className="card_style">
            <div className="image">
                <div className="wrapper">
                    <a className="image" href={`/movie/details/${movie.id}`}>
                        <img 
                        className="poster"
                        loading="lazy"
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt="poster" />
                    </a>
                </div>
            </div>
            <div className="content">
                <h2>
                    <a href={`/movie/details/${movie.id}`} title={movie.title ? movie.title : movie.name}>{movie.title ? movie.title : movie.name}</a>
                </h2>
                <p>{movie.release_date ? movie.release_date : movie.first_air_date}</p>
            </div>
            <div className="hover"></div>
        </div>
    );
}
 
export default MovieCard;