import MediaRow from "../MediaRow";
import Layout from "../Layout";
import { podcastInfo } from "../../myInfo";
export default function PodcastTv(){    
    return (
        <Layout>
            <div className="podcasts-container">
                <MediaRow header="TV/Film" dataType="podcast" dataArray={podcastInfo.filter(podcast=> podcast.genres.includes("TV/Film"))} />
            </div>
        </Layout>
    );
}