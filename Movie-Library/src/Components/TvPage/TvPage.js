import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import DetailsCard from "./TvSections/DetailsCard";

const TvPage = () => {
    const { id } = useParams();

    const [data, setData] = useState([]);
    const [genres, setGenres] = useState([]);

    console.log(data);
    useEffect(() => {
            fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=fc68e62b5172573df0b94dc66328c630&language=en-US`)
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