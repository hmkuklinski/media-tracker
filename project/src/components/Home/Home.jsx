import Layout from "../Layout";
import { animeInfo, chineseDramaInfo, japanDramaInfo, kdramaInfo, tvShowInfo, thaiDramaInfo } from "../../myInfo";
import { useState, useEffect} from "react";
import TvLanding from "../TvLanding";
import MediaRow from '../MediaRow';

export default function Home(){
    const filteredStreaming = tvShowInfo.filter(show => show.status === "Watching" || show.status === "Streaming");
    const [currEp, setCurrEp]= useState(filteredStreaming[0]);

    //preload the images
    useEffect(() => {
        filteredStreaming.forEach(show => {
            const img = new Image();
            img.src = show.imgsrc;
        });
    }, [filteredStreaming]);

    return (
        <Layout>
            <TvLanding {...currEp} />
            <div className="selection-menu">
                {filteredStreaming.map((ep)=>(
                    <div className={`selection-option ${ep.id === currEp.id? "selected":""}`} onClick={()=>setCurrEp(ep)}>
                        {ep.id === currEp.id ? "●" : "○"}
                    </div>
                ))}
            </div>
            <MediaRow header="Category- US/UK Dramas" dataType="tv" dataArray={tvShowInfo} />
            <MediaRow header="Category- Korean Dramas" dataType="tv" dataArray={kdramaInfo} />
            <MediaRow header="Category- Chinese Dramas" dataType="tv" dataArray={chineseDramaInfo} />
            <MediaRow header="Category- Japanese Dramas" dataType="tv" dataArray={japanDramaInfo} />
            <MediaRow header="Category- Thai Dramas" dataType="tv"dataArray={thaiDramaInfo} />
            <MediaRow header="Category- Anime" dataType="anime" dataArray={animeInfo} />
        </Layout>
    );
}