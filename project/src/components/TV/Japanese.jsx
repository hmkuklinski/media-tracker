import { japanDramaInfo, animeInfo } from "../../myInfo";
import Category from "./Category";
import MediaRow from "../MediaRow";

export default function Japanese({isMain}){
    const japDramas = <Category list={japanDramaInfo} filterProp="status" filterText="Featured" key="Japanese" id="jdramas" isMain={isMain}/>;
    const animes = <MediaRow header="Anime" dataType="anime" dataArray={animeInfo} />;
    
    return (
        <div className="japanese-container">
            {japDramas}
            {animes}
        </div>
    )
}