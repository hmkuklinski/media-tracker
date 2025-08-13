import Layout from "../Layout";
import { podcastInfo } from "../../myInfo";
import { useState, useEffect } from "react";
import PodcastLanding from "./PodcastLanding";
export default function PodCategory({header, isCategory, filterText}){
    const filteredStreaming = podcastInfo.filter(podcast=> isCategory? podcast.genres.includes(filterText):podcast.status === filterText);
    const [currEp, setCurrEp]= useState(filteredStreaming[0]);

    //preload the images
    useEffect(() => {
        filteredStreaming.forEach(show => {
            const img = new Image();
            img.src = show.imgsrc;
        });
        
    }, [filteredStreaming, currEp]);
    return (
        <Layout>
            <PodcastLanding {...currEp} id={currEp.id}/>
            <div className="selection-menu">
                {filteredStreaming.map((ep)=>(
                    <div className={`selection-option ${ep.id === currEp.id? "selected":""}`} onClick={()=>setCurrEp(ep)}>
                        {ep.id === currEp.id ? "●" : "○"}
                    </div>
                ))}
            </div>
            {/* <div className="podcast-container">
                <MediaRow header={header} dataType="podcast" dataArray={podcastInfo.filter(podcast=> isCategory? podcast.genres.includes(filterText):podcast.status === filterText)} />
            </div> */}
        </Layout>
    );
}