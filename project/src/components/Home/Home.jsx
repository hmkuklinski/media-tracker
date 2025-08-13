import Layout from "../Layout";
import {chineseDramaInfo, kdramaInfo, tvShowInfo, thaiDramaInfo, internationalInfo, documentaryInfo, featuredDocs, japanDramaInfo, animeInfo} from "../../myInfo";
import { useState, useEffect} from "react";
import TvLanding from "../TvLanding";
import MediaRow from '../MediaRow';

export default function Home(){
    const filteredStreaming = tvShowInfo.filter(show => show.status === "Watching" || show.status === "Streaming");
    const filteredRanking = filteredStreaming.sort((a, b) => b.rating.length - a.rating.length);
    const [currEp, setCurrEp]= useState(filteredRanking[0]);

    const internationalStreaming = internationalInfo.filter(show => show.status === "Featured");
    const internationalRanking = internationalStreaming.sort((a, b) => b.rating.length - a.rating.length);
    const [currInternational, setCurrInternational]= useState(internationalRanking[0]);

    const docStreaming = featuredDocs;
    const docRanking = docStreaming.sort((a, b) => b.rating.length - a.rating.length);
    const [currDoc, setCurrDoc]= useState(docRanking[0]);

    const japStreaming = [...japanDramaInfo, ...animeInfo].filter(show => show.status === "Featured");
    const japRanking = japStreaming.sort((a, b) => b.rating.length - a.rating.length);
    const [currJap, setCurrJap]= useState(japRanking[0]);


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
    }, [filteredStreaming, internationalStreaming]);


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

    return (
        <Layout>
            <TvLanding {...currEp} id="main-tv"/>
            <div className="selection-menu">
                {filteredRanking.map((ep)=>(
                    <div className={`selection-option ${ep.id === currEp.id? "selected":""}`} onClick={()=>setCurrEp(ep)}>
                        {ep.id === currEp.id ? "●" : "○"}
                    </div>
                ))}
            </div>
            <MediaRow header="US/UK Dramas" dataType="tv" dataArray={tvShowInfo} />
            <TvLanding {...currInternational} id="international"/>
            <div className="selection-menu">
                {internationalRanking.map((ep)=>(
                    <div className={`selection-option ${ep.id === currInternational.id? "selected":""}`} onClick={()=>setCurrInternational(ep)}>
                        {ep.id === currInternational.id ? "●" : "○"}
                    </div>
                ))}
            </div>

            <MediaRow header="Korean Dramas" dataType="tv" dataArray={kdramaInfo} />
            <MediaRow header="Chinese Dramas" dataType="tv" dataArray={chineseDramaInfo} />
            <MediaRow header="Thai Dramas" dataType="tv"dataArray={thaiDramaInfo} />
            
            
            <TvLanding {...currDoc} id="docs" />
            <div className="selection-menu">
                {docRanking.map((ep)=>(
                    <div className={`selection-option ${ep.id === currDoc.id? "selected":""}`} onClick={()=>setCurrDoc(ep)}>
                        {ep.id === currDoc.id ? "●" : "○"}
                    </div>
                ))}
            </div>
            
            <MediaRow header="Documentary" dataType="movie" dataArray={documentaryInfo} />

            <TvLanding {...currJap} id="jdramas" />
            <div className="selection-menu">
                {japRanking.map((ep)=>(
                    <div className={`selection-option ${ep.id === currJap.id? "selected":""}`} onClick={()=>setCurrJap(ep)}>
                        {ep.id === currJap.id ? "●" : "○"}
                    </div>
                ))}
            </div>
            <MediaRow header="Japanese Dramas" dataType="tv" dataArray={japanDramaInfo} />
            <MediaRow header="Anime" dataType="anime" dataArray={animeInfo} />

        </Layout>
    );
}