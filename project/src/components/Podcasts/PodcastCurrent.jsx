import MediaRow from "../MediaRow";
import Layout from "../Layout";
import { podcastInfo } from "../../myInfo";
export default function PodcastCurrent(){
    return (
        <Layout>
            <div className="podcasts-container">
                <MediaRow header="Currently Listening" dataType="podcast" dataArray={podcastInfo.filter(podcast=> podcast.status === "Listening")} />
            </div>
        </Layout>
    );
}