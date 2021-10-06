import '../../../Styles/HomePage/MainSections/TopRatedSection/TopRatedSection.css';
import React from "react";
import MovieCard from './MovieCard';
import { useEffect, useState } from "react";

const TopRatedSection = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
            fetch('https://api.themoviedb.org/3/tv/popular?api_key=fc68e62b5172573df0b94dc66328c630&language=en-US&page=1')
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
    <section className="BottomSectionTwo">
        <div className="column_wrapper">
            <div className="content_wrapper">
                <div className="column">
                    <div className="column_header">
                        <h2>What's Popular</h2>
                    </div>
                    <div className="media">
                        <div className="results">
                        {data.length>0 && (
                        <div className="pageNumber">
                        {data.map(movie=> (
                        <MovieCard key={movie.id} movie={movie} />
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

export default TopRatedSection;