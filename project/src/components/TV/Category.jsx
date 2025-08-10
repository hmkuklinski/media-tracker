import Layout from "../Layout";
import { useState, useEffect} from "react";
import TvLanding from "../TvLanding";
import MediaRow from '../MediaRow';

export default function Category({list, filterProp, filterText, dataType=null}){
    // generate the filtered list based on what is passed: for individual categories, will filter the genre attribute. for watch status, will filter based on status attribute
    const filtered = list.filter(show => show[filterProp].includes(filterText));
    const filteredRanking = filtered.sort((a, b) => b.rating.length - a.rating.length);
    const filtered10 = filteredRanking.slice(0,10);
    const [currEp, setCurrEp]= useState(filtered[0]);

    //filter the filtered list by streaming platform
    const netflixContent = filtered.filter(show=> show.watchOn.includes("Netflix"));
    const huluContent = filtered.filter(show=> show.watchOn.includes("Hulu"));
    const paramountContent = filtered.filter(show=> show.watchOn.includes("Paramount+"));
    const primeContent =filtered.filter(show=> show.watchOn.includes("Amazon Prime Video"));

    //preload the images
    useEffect(() => {
        filtered.forEach(show => {
            const img = new Image();
            img.src = show.imgsrc;
        });
        
    }, [filtered, currEp]);

    //see if there's a passed dataType value (anime, movie, documentary, etc...) --> if not, set to tv
    const dataValue = dataType? dataType: "tv";
    //switch the pic if the dataValue anything besides tv
    const switchPic = dataValue==="tv"? false: true;



    return (
        <Layout>
            <TvLanding {...currEp} switchPic={switchPic} />
            <div className="selection-menu">
                {filtered10.map((ep)=>(
                    <div className={`selection-option ${ep.id === currEp.id? "selected":""}`} onClick={()=>setCurrEp(ep)}>
                        {ep.id === currEp.id ? "●" : "○"}
                    </div>
                ))}
            </div>
           {netflixContent.length>0  &&  <MediaRow header="Now Streaming on Netflix" dataType={dataValue} dataArray={netflixContent} />}
           {huluContent.length >0 &&  <MediaRow header="Now Streaming on Hulu" dataType={dataValue} dataArray={huluContent} />}
           {paramountContent.length > 0 && <MediaRow header="Now Streaming on Paramount+" dataType={dataValue} dataArray={paramountContent} />}
           {primeContent.length >0 &&  <MediaRow header="Now Streaming on Prime Video" dataType={dataValue} dataArray={primeContent} /> }
        </Layout>
    );
}