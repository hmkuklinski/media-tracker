import MediaRow from "../MediaRow";
import Layout from "../Layout";
import { podcastInfo } from "../../myInfo";
import { useState } from "react";
import PodcastLanding from "./PodcastLanding";
export default function Podcasts(){
    //declare the genres to allow for an easy map of each section! :D
    const myGenres = ["Comedy", "TV/Film", "Society"];
    const filteredStreaming = podcastInfo.filter(show => show.status === "Listening");
    const [currEp, setCurrEp]= useState(filteredStreaming[0]);
    
    return (
        <Layout>
            <div className="podcasts-container">
                <PodcastLanding {...currEp} />
                <div className="selection-menu">
                    {filteredStreaming.map((ep)=>(
                        <div className={`selection-option ${ep.id === currEp.id? "selected":""}`} onClick={()=>setCurrEp(ep)}>
                            {ep.id === currEp.id ? "●" : "○"}
                        </div>
                    ))}
                </div>
                {myGenres.map((genre)=>(
                    <MediaRow header={genre} dataType="podcast" dataArray={podcastInfo.filter(podcast=> podcast.genres.includes(genre))} />
                ))}
            </div>
        </Layout>
    );
}