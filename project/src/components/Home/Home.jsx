import Layout from "../Layout";
import { animeInfo, chineseDramaInfo, japanDramaInfo, kdramaInfo, tvShowInfo, thaiDramaInfo, internationalInfo, documentaryInfo, featuredDocs } from "../../myInfo";
import { useState, useEffect} from "react";
import TvLanding from "../TvLanding";
import MediaRow from '../MediaRow';

export default function Home(){
    const filteredStreaming = tvShowInfo.filter(show => show.status === "Watching" || show.status === "Streaming");
    const filteredRanking = filteredStreaming.sort((a, b) => b.rating.length - a.rating.length);
    const [currEp, setCurrEp]= useState(filteredRanking[0]);

    const internationalStreaming = internationalInfo.filter(show => show.status === "Watching");
    const internationalRanking = internationalStreaming.sort((a, b) => b.rating.length - a.rating.length);
    const [currInternational, setCurrInternational]= useState(internationalRanking[0]);

    const docStreaming = featuredDocs;
    const docRanking = docStreaming.sort((a, b) => b.rating.length - a.rating.length);
    const [currDoc, setCurrDoc]= useState(docRanking[0]);


    //preload the images
    useEffect(() => {
        filteredStreaming.forEach(show => {
            const img = new Image();
            img.src = show.imgsrc;
        });
        internationalStreaming.forEach(show => {
            const img = new Image();
            img.src = show.imgsrc;
        });
    }, [filteredStreaming, internationalStreaming]);

    return (
        <Layout>
            <TvLanding {...currEp} id="main-tv" />
            <div className="selection-menu">
                {filteredRanking.map((ep)=>(
                    <div className={`selection-option ${ep.id === currEp.id? "selected":""}`} onClick={()=>setCurrEp(ep)}>
                        {ep.id === currEp.id ? "●" : "○"}
                    </div>
                ))}
            </div>
            <MediaRow header="Category- US/UK Dramas" dataType="tv" dataArray={tvShowInfo} />
            <TvLanding {...currInternational} id="international" />
            <div className="selection-menu">
                {internationalRanking.map((ep)=>(
                    <div className={`selection-option ${ep.id === currInternational.id? "selected":""}`} onClick={()=>setCurrInternational(ep)}>
                        {ep.id === currInternational.id ? "●" : "○"}
                    </div>
                ))}
            </div>

            <MediaRow header="Category- Korean Dramas" dataType="tv" dataArray={kdramaInfo} />
            <MediaRow header="Category- Chinese Dramas" dataType="tv" dataArray={chineseDramaInfo} />
            <MediaRow header="Category- Japanese Dramas" dataType="tv" dataArray={japanDramaInfo} />
            <MediaRow header="Category- Thai Dramas" dataType="tv"dataArray={thaiDramaInfo} />
            
            
            <TvLanding {...currDoc} id="docs" />
            <div className="selection-menu">
                {docRanking.map((ep)=>(
                    <div className={`selection-option ${ep.id === currDoc.id? "selected":""}`} onClick={()=>setCurrDoc(ep)}>
                        {ep.id === currDoc.id ? "●" : "○"}
                    </div>
                ))}
            </div>
            <MediaRow header="Category- Documentary" dataType="movie" dataArray={documentaryInfo} />
            
            <MediaRow header="Category- Anime" dataType="anime" dataArray={animeInfo} />
        </Layout>
    );
}