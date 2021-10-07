import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import DetailsCard from "./TvSections/DetailsCard";

const TvPage = () => {
    const { id } = useParams();

    const [data, setData] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
            fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`)
                .then(res => res.json())
                .then(data =>{
                    if(!data.errors){
                        setData(data);
                        setGenres(data.genres);
                    }else{
                        setData([]);
                        setGenres([]);
                    }
                })
    }, [id]);

    return (
        <section className="detailsPage">
            <DetailsCard movie={data} genres={genres}/>
        </section>
    );
}
 
export default TvPage;