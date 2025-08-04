import MediaRow from "../MediaRow";
import Layout from "../Layout";
import { podcastInfo } from "../../myInfo";
export default function PodcastComedy(){    
    return (
        <Layout>
            <div className="podcasts-container">
                <MediaRow header="Comedy" isPodcast={true} dataArray={podcastInfo.filter(podcast=> podcast.genres.includes("Comedy"))} />
            </div>
        </Layout>
    );
}