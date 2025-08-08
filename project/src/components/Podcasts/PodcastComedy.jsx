import MediaRow from "../MediaRow";
import Layout from "../Layout";
import { podcastInfo } from "../../myInfo";
export default function PodcastComedy(){    
    return (
        <Layout>
            <div className="podcasts-container">
                <MediaRow header="Comedy" dataType="podcast" dataArray={podcastInfo.filter(podcast=> podcast.genres.includes("Comedy"))} />
            </div>
        </Layout>
    );
}