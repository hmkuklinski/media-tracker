import Layout from "../Layout";
import { animeInfo, childhoodCartoons, animatedAdult} from "../../myInfo";
import { useState, useEffect} from "react";
import TvLanding from "../TvLanding";
import MediaRow from '../MediaRow';

export default function Animes(){
    const animeStreaming = animeInfo.filter(show => show.status === "Featured");
    const animeRanking = animeStreaming.sort((a, b) => b.rating.length - a.rating.length);
    const [currEp, setCurrEp]= useState(animeRanking[0]);

    const childhoodStreaming = childhoodCartoons.filter(show => show.status === "Featured");
    const childhoodRanking = childhoodStreaming.sort((a, b) => b.rating.length - a.rating.length);
    const [currChildhood, setCurrChildhood]= useState(childhoodRanking[0]);

    const adultStreaming = animatedAdult.filter(show => show.status === "Watched");
    const adultRanking = adultStreaming.sort((a, b) => b.rating.length - a.rating.length);
    const [currAdult, setCurrAdult]= useState(adultRanking[0]);


    //preload the images
    useEffect(() => {
        animeStreaming.forEach(show => {
           [show.imgsrc, show.altimg].forEach(src => {
                if (src) {
                    const img = new Image();
                    img.src = src;
                }
            });
        });
        childhoodStreaming.forEach(show => {
            [show.imgsrc, show.altimg].forEach(src => {
                if (src) {
                    const img = new Image();
                    img.src = src;
                }
            });
        });

        adultStreaming.forEach(show => {
            [show.imgsrc, show.altimg].forEach(src => {
                if (src) {
                    const img = new Image();
                    img.src = src;
                }
            });
        });
    }, [animeStreaming, childhoodStreaming, adultStreaming]);


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

    const animeFeatured = isMobile? (
        // featured: 
        <div>
            <TvLanding {...animeInfo[0]} id="main-tv"/>
        </div>
    ):(
        <div>
            <TvLanding {...currEp} id="main-tv" switchPic={true}/>
            <div className="selection-menu">
                {animeRanking.map((ep)=>(
                    <div className={`selection-option ${ep.id === currEp.id? "selected":""}`} onClick={()=>setCurrEp(ep)}>
                        {ep.id === currEp.id ? "●" : "○"}
                    </div>
                ))}
            </div>
        </div>
    );

    const childhoodFeatured = isMobile? (
        // featured:
        <div>
            <TvLanding {...childhoodCartoons[0]} id="main-tv"/>
        </div>
    ):(
        <div>
            <TvLanding {...currChildhood} id="childhood" switchPic={true}/>
            <div className="selection-menu">
                {childhoodRanking.map((ep)=>(
                    <div className={`selection-option ${ep.id === currChildhood.id? "selected":""}`} onClick={()=>setCurrChildhood(ep)}>
                        {ep.id === currChildhood.id ? "●" : "○"}
                    </div>
                ))}
            </div>
        </div>
    );

    const adultFeatured = isMobile? (
        // featured: 
        <div>
            <TvLanding {...animatedAdult[0]} id="main-tv" />
        </div>
    ):(
        <div>
            <TvLanding {...currAdult} id="animated-adult" switchPic={true}/>
            <div className="selection-menu">
                {adultRanking.map((ep)=>(
                    <div className={`selection-option ${ep.id === currAdult.id? "selected":""}`} onClick={()=>setCurrAdult(ep)}>
                        {ep.id === currAdult.id ? "●" : "○"}
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <Layout>
            {animeFeatured}
            <MediaRow header="Japanese Anime" dataType="anime" dataArray={animeInfo} />
            
            {childhoodFeatured}
            <MediaRow header="Childhood Cartoons" dataType="anime" dataArray={childhoodCartoons} />
            
            {adultFeatured}
            <MediaRow header="Animated TV" dataType="anime" dataArray={animatedAdult} />
        </Layout>
    );
}