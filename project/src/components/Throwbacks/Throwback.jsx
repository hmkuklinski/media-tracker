import Layout from "../Layout";
import {childhoodCartoons, childhoodFaves, childhoodMovies} from "../../myInfo";
import { useState, useEffect} from "react";
import TvLanding from "../TvLanding";
import MediaRow from '../MediaRow';

export default function Throwback(){
    const kidStreaming = [...childhoodMovies, ...childhoodFaves, ...childhoodCartoons].filter(show => show.status === "Featured");
    const [currKid, setCurrKid]= useState(kidStreaming[0]);

    //preload the images
    useEffect(() => {
        kidStreaming.forEach(show => {
            [show.imgsrc, show.altimg].forEach(src => {
                if (src) {
                    const img = new Image();
                    img.src = src;
                }
            });
        });
    }, [kidStreaming]);


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

    const kidFeatured = isMobile? (
        // featured: 
        <div>
            <TvLanding {...childhoodFaves[1]} id="main-tv"/>
        </div>
    ):(
        <div>
            <TvLanding {...currKid} switchPic={true} id="childhood" />
            <div className="selection-menu">
                {kidStreaming.map((ep)=>(
                    <div className={`selection-option ${ep.id === currKid.id? "selected":""}`} onClick={()=>setCurrKid(ep)}>
                        {ep.id === currKid.id ? "●" : "○"}
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <Layout>
            {kidFeatured}
            <MediaRow header="Childhood TV" dataType="movie" dataArray={childhoodFaves} />
            <MediaRow header="Childhood Films" dataType="movie" dataArray={childhoodMovies} />
            <MediaRow header="Childhood Cartoons" dataType="anime" dataArray={childhoodCartoons} />
        </Layout>
    );
}