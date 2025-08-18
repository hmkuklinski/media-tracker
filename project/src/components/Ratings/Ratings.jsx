import { allMovies, allTVShows } from "../../myInfo";
import Layout from "../Layout";
import MediaRow from "../MediaRow";
import { useState, useEffect } from "react";

export default function Ratings(){
    const [numStars, setNumStars] = useState("★★★★★");
    const [useDefault, setUseDefault] = useState(true);
    const [showFilters, setShowFilters] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth<768);

    //check if the user is on mobile:
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 768);
            if (isMobile){
                setShowFilters(false);
            }
        }
        handleResize(); // check on mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isMobile]);

    //for use on filter selected:
    const tvData = allTVShows.filter(show=> show.rating === numStars);
    const movieData = allMovies.filter(mov=>mov.rating === numStars);

    //generate the default display content:
    const starsArray = ["★★★★★", "★★★★", "★★★", "★★", "★"];
    const defaultContent = (
        <div className="my-ratings">
            {starsArray.map(cat => {
                //filtered data:
                let tvData = allTVShows.filter(show=> show.rating ===cat );
                let movieData = allMovies.filter(mov=> mov.rating === cat);

                return (
                    <div className="rating" key={cat}>
                        <div className="curr-rating">
                            <h2>Rating: {cat} </h2>
                        </div>
                        <div className="rating-rows">
                            {tvData.length>0 && (<MediaRow header={`TV Shows (${tvData.length})`} dataType="tv" dataArray={tvData} /> )}
                            {movieData.length>0 && (<MediaRow header={`Movies (${movieData.length})`} dataType="movie" dataArray={movieData} />)}
                        </div>
                    </div>
                )
            })}
        </div>
    );

    //filter option selected:
    const updateDisplay = (stars) =>{
        setNumStars(stars);
        setUseDefault(false);
        setShowFilters(false);
    }

    //filter option reset:
    const resetDisplay= () => {
        setNumStars("★★★★★");
        setUseDefault(true);
        setShowFilters(false);
    }

    //show filter options div:
    const toggleFilter = () => setShowFilters(prev => !prev);

    //holds the "buttons" to change the filter setting:
    const filterOptions = (
        <div className="ratings">
            
            <div className="rating-container" onClick={() =>updateDisplay("★★★★★")}>★★★★★</div>
            <div className="rating-container" onClick={() =>updateDisplay("★★★★")}>★★★★☆</div>
            <div className="rating-container" onClick={() =>updateDisplay("★★★")}>★★★☆☆</div>
            <div className="rating-container" onClick={() =>updateDisplay("★★")}>★★☆☆☆</div>
            <div className="rating-container" onClick={() =>updateDisplay("★")}>★☆☆☆☆</div>
            <div className="rating-container" onClick={() =>resetDisplay()}>All</div>
        </div>
    );

    return (
    <Layout>
        <div className="rating-main-container">
            {!isMobile && (
                <div className="ratings-display">
                    <div className="ratings-main-title">
                        {!useDefault? <h1>My Ratings: {numStars}</h1>: <h1>My Ratings</h1>}
                    </div>
                    <div className="ratings-filter" onClick={()=> toggleFilter()}><ion-icon name="funnel-outline"></ion-icon></div>
                </div>
            )}
            {showFilters && filterOptions}
            {useDefault? (defaultContent):
                (
                    <div className="rating">
                        <div className="rating-rows">
                            {tvData.length>0 && (<MediaRow header={`TV Shows (${tvData.length})`} dataType="tv" dataArray={tvData} /> )}
                            {movieData.length>0 && (<MediaRow header={`Movies (${movieData.length})`} dataType="movie" dataArray={movieData} />)}
                        </div>
                    </div>
                )
            }
        </div>
    </Layout>
    );
}