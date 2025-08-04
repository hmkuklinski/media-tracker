import MediaRow from "../MediaRow";
import Layout from "../Layout";
import { podcastInfo } from "../../myInfo";
export default function PodcastTv(){    
    return (
        <Layout>
            <div className="podcasts-container">
                <MediaRow header="TV/Film" isPodcast={true} dataArray={podcastInfo.filter(podcast=> podcast.genres.includes("TV/Film"))} />
            </div>
        </Layout>
    );
}