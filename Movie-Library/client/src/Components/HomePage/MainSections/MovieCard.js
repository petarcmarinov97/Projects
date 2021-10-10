import '../../../Styles/HomePage/MainSections/MovieCard/MovieCard.css';
import React from "react";

const MovieCard = ({type, movie}) => {
    return (
        <div key={movie.id} id={movie.id} className="card_style">
            <div className="image">
                <div className="wrapper">
                    <a className="image" href={`/${type}/details/${movie.id}`}>
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
                    {movie.title
                    ? <a href={`/${type}/details/${movie.id}`}>{movie.title}</a>
                    :<a href={`/${type}/details/${movie.id}`}>{movie.name}</a>
                    }
                </h2>
                    {movie.release_date
                    ? <p>{movie.release_date}</p>
                    : <p>{movie.first_air_date}</p>
                    }
            </div>
            <div className="hover"></div>
        </div>
    );
}
 
export default MovieCard;