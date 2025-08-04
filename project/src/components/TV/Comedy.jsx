import MediaRow from "../MediaRow";
import Layout from "../Layout";
import { tvShowInfo, genreTitles } from "../../myInfo";
export default function Comedy(){
    const genre="Comedy";
    return (
        <Layout>
            <div className="podcasts-container">
                <MediaRow header={genreTitles[genre]} isPodcast={false} dataArray={tvShowInfo.filter(show=> show.genres.includes(genre))} />
            </div>
        </Layout>
    );
}