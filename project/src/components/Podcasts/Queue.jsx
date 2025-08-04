import MediaRow from "../MediaRow";
import Layout from "../Layout";
import { podcastInfo } from "../../myInfo";
export default function Queue(){
    return (
        <Layout>
            <div className="podcasts-container">
                <MediaRow header="Podcast Queue" isPodcast={true} dataArray={podcastInfo.filter(podcast=> podcast.status === "To Listen")} />
            </div>
        </Layout>
    );
}