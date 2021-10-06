import "../../Styles/HomePage/Main/Main.css"
import React from "react";
import { useState } from "react";
import SearchSection from "./MainSections/SearchSection";
import ResultSection from "../HomePage/MainSections/ResultSection"
import BottomSection from "../HomePage/MainSections/BottomSection";

const Main = () => {

    const [query, setQuerry] = useState("");
    const [results, setResults] = useState([]);
    const [isSubmited, setIsSubmited] = useState(false);

    const onChange = (e) => {
        e.preventDefault();

        setQuerry(e.target.value);
        
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=fc68e62b5172573df0b94dc66328c630&language=en-US&query=${e.target.value}&page=1&include_adult=false`)
            .then(res => res.json())
            .then(data => {
                if (!data.errors) {
                    setResults(data.results);
                } else {
                    setResults([]);
                }
            });
    };

    return (
        <main>
            <SearchSection
            onChange={onChange}
            setQuerry={setQuerry}
            setIsSubmited={setIsSubmited}
            />
            <ResultSection results={results}/>
            <BottomSection />
        </main>
        
    );
}
 
export default Main