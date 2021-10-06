import React from "react";
import '../../../Styles/SearchPage/ResultCard/ResultCard.css'

const ResultCard = ({movie}) => {
    return (
        <div key={movie.id} id={movie.id} className="card_style2">
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
 
export default ResultCard;