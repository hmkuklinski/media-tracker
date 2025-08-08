import MediaRow from "../MediaRow";
import Layout from "../Layout";
import { tvShowInfo, genreTitles } from "../../myInfo";
export default function Action(){
    const genre="Action";
    return (
        <Layout>
            <div className="podcasts-container">
                <MediaRow header={genreTitles[genre]} dataType="tv" dataArray={tvShowInfo.filter(show=> show.genres.includes(genre))} />
            </div>
        </Layout>
    );
}