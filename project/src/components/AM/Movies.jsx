import Layout from "../Layout";
import { childhoodMovies, internationalFilms, myMovies} from "../../myInfo";
import { useState, useEffect} from "react";
import TvLanding from "../TvLanding";
import MediaRow from '../MediaRow';

export default function Movies(){
    const movieStreaming = myMovies.filter(show => show.status === "Featured");
    const movieRanking = movieStreaming.sort((a, b) => b.rating.length - a.rating.length);
    const [currEp, setCurrEp]= useState(movieRanking[0]);

    const internationalStreaming = internationalFilms.filter(show => show.status === "Featured");
    const internationalRanking = internationalStreaming.sort((a, b) => b.rating.length - a.rating.length);
    const [currInternational, setCurrInternational]= useState(internationalRanking[0]);

    const kidStreaming = childhoodMovies.filter(show => show.status === "Featured");
    const kidRanking = kidStreaming.sort((a, b) => b.rating.length - a.rating.length);
    const [currKid, setCurrKid]= useState(kidRanking[0]);


    //preload the images
    useEffect(() => {
        movieStreaming.forEach(show => {
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

        kidStreaming.forEach(show => {
            [show.imgsrc, show.altimg].forEach(src => {
                if (src) {
                    const img = new Image();
                    img.src = src;
                }
            });
        });
    }, [movieStreaming, internationalStreaming, kidStreaming]);


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
        // featured: 
        <div>
            <TvLanding {...myMovies[0]} id="main-tv"/>
        </div>
    ):(
        <div>
            <TvLanding {...currEp} id="main-tv" switchPic={true}/>
            <div className="selection-menu">
                {movieRanking.map((ep)=>(
                    <div className={`selection-option ${ep.id === currEp.id? "selected":""}`} onClick={()=>setCurrEp(ep)}>
                        {ep.id === currEp.id ? "●" : "○"}
                    </div>
                ))}
            </div>
        </div>
    );

    const internationalFeatured = isMobile? (
        // featured:
        <div>
            <TvLanding {...internationalFilms[0]} id="main-tv"/>
        </div>
    ):(
        <div>
            <TvLanding {...currInternational} id="international" switchPic={true}/>
            <div className="selection-menu">
                {internationalRanking.map((ep)=>(
                    <div className={`selection-option ${ep.id === currInternational.id? "selected":""}`} onClick={()=>setCurrInternational(ep)}>
                        {ep.id === currInternational.id ? "●" : "○"}
                    </div>
                ))}
            </div>
        </div>
    );

    const kidFeatured = isMobile? (
        // featured: 
        <div>
            <TvLanding {...childhoodMovies[0]} id="main-tv" />
        </div>
    ):(
        <div>
            <TvLanding {...currKid} id="jdramas" switchPic={true}/>
            <div className="selection-menu">
                {kidRanking.map((ep)=>(
                    <div className={`selection-option ${ep.id === currKid.id? "selected":""}`} onClick={()=>setCurrKid(ep)}>
                        {ep.id === currKid.id ? "●" : "○"}
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <Layout>
            {usFeatured}
            <MediaRow header="My Movie List" dataType="movie" dataArray={myMovies} />
            <MediaRow header="Horror" dataType="movie" dataArray={myMovies.filter(show => show.genres.includes("Horror"))} />
            <MediaRow header="Classics" dataType="movie" dataArray={myMovies.filter(show => show.genres.includes("Classic"))} />
            {/* <MediaRow header="Romance" dataType="movie" dataArray={myMovies.filter(show => show.genres.includes("Romance"))} /> */}
            
            {internationalFeatured}
            <MediaRow header="International Films" dataType="movie" dataArray={internationalFilms} />
            
            
            {kidFeatured}
            <MediaRow header="Childhood Films" dataType="movie" dataArray={childhoodMovies} />
        </Layout>
    );
}