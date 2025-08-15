import Layout from "../Layout";
import { podcastInfo } from "../../myInfo";
import { useState, useEffect } from "react";
import PodcastLanding from "./PodcastLanding";

//normal content row: <MediaRow header={header} dataType="podcast" dataArray={podcastInfo.filter(podcast=> isCategory? podcast.genres.includes(filterText):podcast.status === filterText)} />

//pass in the category we'll use for filter (genres, status, etc)- filterText is what to filter by:
export default function PodCategory({isCategory, filterText}){
    const filteredStreaming = podcastInfo.filter(podcast=> isCategory? podcast.genres.includes(filterText):podcast.status === filterText);
   
    const [currInd, setCurrInd]= useState(0); 
    const currEp = filteredStreaming[currInd];
    const [isMobile, setIsMobile]= useState(window.innerWidth<768);

    //preload the images
    useEffect(() => {
        filteredStreaming.forEach(show => {
            const img = new Image();
            img.src = show.imgsrc;
        });
        
    }, [filteredStreaming, currEp]);

    //to determine if its on mobile:
    useEffect(()=>{
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);

        // cleanup to avoid memory leaks
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handlePrev = () => {
        setCurrInd(prev => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setCurrInd(prev => Math.min(prev + 1, filteredStreaming.length - 1));
    };

    const podContent = !isMobile? (
        <div>
           <PodcastLanding {...currEp} id={currEp.id}/>
            <div className="selection-menu">
                {filteredStreaming.map((ep, index)=>(
                    <div className={`selection-option ${index === currInd? "selected":""}`}onClick={() => setCurrInd(index)}>
                        {index === currInd ? "●" : "○"}
                    </div>
                ))}
            </div> 
        </div>
    ): (
        <div className="podmobile">
            <PodcastLanding {...currEp} id={currEp.id}/>
            <div className="landing-buttons">
                {currInd !== 0 && (
                    <div className="prev-button" onClick={()=>handlePrev()}>
                       <ion-icon name="chevron-back-outline"></ion-icon> Prev
                    </div>
                )}
                {currInd !== 0 && (
                    <div className="home-button" onClick={()=>setCurrInd(0)}>
                       <ion-icon name="home-outline"></ion-icon>
                    </div>
                )}

                {currInd < filteredStreaming.length-1 && (
                    <div className="next-button" onClick={()=>handleNext()}>
                        Next <ion-icon name="chevron-forward-outline"></ion-icon>
                    </div>
                )}
            </div>
        </div>
    );


    return (
        <Layout>
            {podContent}
        </Layout>
    );
}