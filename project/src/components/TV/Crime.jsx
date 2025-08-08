import MediaRow from "../MediaRow";
import Layout from "../Layout";
import { tvShowInfo, genreTitles } from "../../myInfo";
export default function Crime(){
    const genre="Crime";
    return (
        <Layout>
            <div className="podcasts-container">
                <MediaRow header={genreTitles[genre]} dataType="tv" dataArray={tvShowInfo.filter(show=> show.genres.includes(genre))} />
            </div>
        </Layout>
    );
}