import Layout from "../Layout";
import {chineseDramaInfo, kdramaInfo, tvShowInfo, thaiDramaInfo, internationalInfo, documentaryInfo, featuredDocs, japanDramaInfo, animeInfo, internationalFilms, myMovies} from "../../myInfo";
import { useState, useEffect} from "react";
import TvLanding from "../TvLanding";
import MediaRow from '../MediaRow';

export default function Home(){
    const filteredStreaming = tvShowInfo.filter(show => show.status === "Watching" || show.status === "Streaming");
    const filteredRanking = filteredStreaming.sort((a, b) => b.rating.length - a.rating.length);
    const [currEp, setCurrEp]= useState(filteredRanking[0]);

    const movieStreaming = [...myMovies, ...internationalFilms].filter(show => show.status === "Featured");
    const movieRanking = movieStreaming.sort((a, b) => b.rating.length - a.rating.length);
    const [currMovie, setCurrMovie]= useState(movieRanking[0]);

    const internationalStreaming = internationalInfo.filter(show => show.status === "Featured");
    const internationalRanking = internationalStreaming.sort((a, b) => b.rating.length - a.rating.length);
    const [currInternational, setCurrInternational]= useState(internationalRanking[0]);

    const docStreaming = featuredDocs;
    const docRanking = docStreaming.sort((a, b) => b.rating.length - a.rating.length);
    const [currDoc, setCurrDoc]= useState(docRanking[0]);

    const animatedStreaming = [...japanDramaInfo].filter(show => show.status === "Featured");
    const animatedRanking = animatedStreaming.sort((a, b) => b.rating.length - a.rating.length);
    const [currAnimated, setCurrAnimated]= useState(animatedRanking[0]);

    //preload the images
    useEffect(() => {
        filteredStreaming.forEach(show => {
           [show.imgsrc, show.altimg].forEach(src => {
                if (src) {
                    const img = new Image();
                    img.src = src;
                }
            });
        });
        internationalStreaming.forEach(show => {
            [show.imgsrc, show.altimg].forEach(src => {
                if (src) {
                    const img = new Image();
                    img.src = src;
                }
            });
        });
        docStreaming.forEach(show => {
            [show.imgsrc, show.altimg].forEach(src => {
                if (src) {
                    const img = new Image();
                    img.src = src;
                }
            });
        });
        animatedStreaming.forEach(show => {
            [show.imgsrc, show.altimg].forEach(src => {
                if (src) {
                    const img = new Image();
                    img.src = src;
                }
            });
        });
        movieStreaming.forEach(show => {
            [show.imgsrc, show.altimg].forEach(src => {
                if (src) {
                    const img = new Image();
                    img.src = src;
                }
            });
        });
    }, [filteredStreaming, internationalStreaming, docStreaming, animatedStreaming, movieStreaming]);


    //to handle changes in the tv show display on mobile:
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);

        // cleanup to avoid memory leaks
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const usFeatured = isMobile? (
        // featured: the boys
        <div>
            <TvLanding {...tvShowInfo[52]} id="main-tv"/>
        </div>
    ):(
        <div>
            <TvLanding {...currEp} id="main-tv"/>
            <div className="selection-menu">
                {filteredRanking.map((ep)=>(
                    <div className={`selection-option ${ep.id === currEp.id? "selected":""}`} onClick={()=>setCurrEp(ep)}>
                        {ep.id === currEp.id ? "●" : "○"}
                    </div>
                ))}
            </div>
        </div>
    );

    const internationalFeatured = isMobile? (
        // featured: squid games
        <div>
            <TvLanding {...kdramaInfo[0]} id="main-tv"/>
        </div>
    ):(
        <div>
            <TvLanding {...currInternational} id="international"/>
            <div className="selection-menu">
                {internationalRanking.map((ep)=>(
                    <div className={`selection-option ${ep.id === currInternational.id? "selected":""}`} onClick={()=>setCurrInternational(ep)}>
                        {ep.id === currInternational.id ? "●" : "○"}
                    </div>
                ))}
            </div>
        </div>
    );

    const docFeatured = isMobile? (
        // featured: the universe
        <div>
            <TvLanding {...documentaryInfo[1]} id="main-tv"/>
        </div>
    ):(
        <div>
            <TvLanding {...currDoc} id="docs" />
            <div className="selection-menu" id="docs">
                {docRanking.map((ep)=>(
                    <div className={`selection-option ${ep.id === currDoc.id? "selected":""}`} onClick={()=>setCurrDoc(ep)}>
                        {ep.id === currDoc.id ? "●" : "○"}
                    </div>
                ))}
            </div>
        </div>
    );

    const animatedFeatured = isMobile? (
        // featured: spy x family
        <div>
            <TvLanding {...animeInfo[1]} id="main-tv"/>
        </div>
    ):(
        <div>
            <TvLanding {...currAnimated}  id="jdramas" />
            <div className="selection-menu">
                {animatedRanking.map((ep)=>(
                    <div className={`selection-option ${ep.id === currAnimated.id? "selected":""}`} onClick={()=>setCurrAnimated(ep)}>
                        {ep.id === currAnimated.id ? "●" : "○"}
                    </div>
                ))}
            </div>
        </div>
    );
     const movieFeatured = isMobile? (
        // featured: 
        <div>
            <TvLanding {...myMovies[12]} id="main-tv"/>
        </div>
    ):(
        <div>
            <TvLanding {...currMovie} switchPic={true} id="childhood" />
            <div className="selection-menu">
                {movieStreaming.map((ep)=>(
                    <div className={`selection-option ${ep.id === currMovie.id? "selected":""}`} onClick={()=>setCurrMovie(ep)}>
                        {ep.id === currMovie.id ? "●" : "○"}
                    </div>
                ))}
            </div>
        </div>
    );

    

    return (
        <Layout>
            {usFeatured}
            <MediaRow header="Your Next Watch" dataType="tv" dataArray={tvShowInfo.filter(show=> show.status ==="To Watch")} />
            <MediaRow header="US/UK Dramas" dataType="tv" dataArray={tvShowInfo} />
            
            {movieFeatured}
            <MediaRow header="Featured Films" dataType="movie" dataArray={myMovies} />
            <MediaRow header="International Films" dataType="movie" dataArray={internationalFilms} />

            {internationalFeatured}
            <MediaRow header="K-Dramas" dataType="tv" dataArray={kdramaInfo} />
            <MediaRow header="Chinese Dramas" dataType="tv" dataArray={chineseDramaInfo} />
            <MediaRow header="Thai Dramas" dataType="tv"dataArray={thaiDramaInfo} />
            
            {animatedFeatured}
            <MediaRow header="J-Dramas" dataType="tv" dataArray={japanDramaInfo} />
            <MediaRow header="Anime" dataType="anime" dataArray={animeInfo} />
            
            {docFeatured}
            <MediaRow header="Documentaries" dataType="movie" dataArray={documentaryInfo} />
            <MediaRow header="Documentary Films" dataType="movie" dataArray={myMovies.filter(show=> show.genres.includes("Documentary"))} />

        </Layout>
    );
}