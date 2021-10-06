import "../../Styles/HomePage/Main/Main.css";
import React from "react";
import PopularSection from "./MainSections/PopularSection";
import TopRatedSection from "./MainSections/TopRatedSection";

const Main = () => {

    return (
        <main> 
            <PopularSection/>
            <TopRatedSection />
        </main>
        
    );
}
 
export default Main