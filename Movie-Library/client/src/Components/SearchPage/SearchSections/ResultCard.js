import React from "react";
import '../../../Styles/SearchPage/ResultCard/ResultCard.css'

const ResultCard = ({movie}) => {
    return (
        <div key={movie.id} id={movie.id} className="card_style2">
            <div className="image">
                <div className="wrapper">
                    <a className="image" href={`/${movie.media_type}/details/${movie.id}`}>
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
                ? <a href={`/${movie.media_type}/details/${movie.id}`}>{movie.title}</a>
                :<a href={`/${movie.media_type}/details/${movie.id}`}>{movie.name}</a>
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
 
export default ResultCard;