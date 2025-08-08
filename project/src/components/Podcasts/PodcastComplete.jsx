import MediaRow from "../MediaRow";
import Layout from "../Layout";
import { podcastInfo } from "../../myInfo";
export default function PodcastComplete(){
    return (
        <Layout>
            <div className="podcasts-container">
                <MediaRow header="Completed Podcasts" dataType="podcast" dataArray={podcastInfo.filter(podcast=> podcast.status === "Completed")} />
            </div>
        </Layout>
    );
}