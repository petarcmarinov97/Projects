import React from "react";
import '../../../Styles/TvPage/DetailsPage.css';

const DetailsCard = ({movie, genres}) => {
    return (
        <div
        style={{
            backgroundImage: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}")` 
        }}
        className="header_large_border_second">
            <div className="keyboard_s">
                <div className="single_column">
                    <section id="original_header" className="images_inner">
                        <div className="poster_wrapper">
                            <div className="poster">
                                <div className="image_content">
                                    <img 
                                    className="poster_lazy_load"
                                    loading="lazy"
                                    src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
                                    alt="img_poster" />
                                </div>
                            </div>
                        </div>
                        <div className="header_poster_wrapper">
                            <section className="header_poster">
                                <div className="title" dir="auto">
                                    <h2 className="16">
                                        <a href={`/tv/details/${movie.id}`}>{movie.title ? movie.title : movie.name} </a>
                                        <span className="release_date">({movie.release_date ? movie.release_date : movie.first_air_date})</span>
                                    </h2>
                                    <div className="facts">
                                        <span className="release">{movie.release_date ? movie.release_date : movie.first_air_date}</span>
                                        <span className="genres">
                                            {genres.map(genre=>(
                                                <a href={`/tv/details/${movie.id}`}>{genre.name} </a>
                                            ))}
                                        </span>
                                        <span className="runtime">{movie.runtime} m</span>
                                    </div>
                                </div>
                                <ul className="auto_actions">
                                    <li className="tooltip_use" title data-role="tooltip">
                                        <a id="favaourite" href="#" class="add_to_account_favourite">
                                            <span className="heartIcon"></span>
                                        </a>
                                    </li>
                                    <li className="tooltip_use_second" title data-role="tooltip">
                                        <a id="watchlist" href="#" className="add_to_account_watchlist">
                                            <span className="bookmarktWhiteIcon"></span>
                                        </a>

                                    </li>
                                </ul>
                                <div className="header_info">
                                    <h3 className="tagline">{movie.tagline}</h3>
                                    <h3 dir="auto">Overview</h3> 
                                    <div className="overview" div="auto">
                                        <p>{movie.overview}</p>
                                    </div>                 
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
 
export default DetailsCard;