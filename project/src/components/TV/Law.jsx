import MediaRow from "../MediaRow";
import Layout from "../Layout";
import { genreTitles, tvShowInfo } from "../../myInfo";
export default function Law(){
    return (
        <Layout>
            <div className="podcasts-container">
                <MediaRow header={genreTitles["Law"]} dataType="tv" dataArray={tvShowInfo.filter(show=> show.genres.includes("Law")|| show.genres.includes("Political"))} />
            </div>
        </Layout>
    );
}