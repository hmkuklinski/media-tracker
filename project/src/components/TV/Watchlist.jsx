import MediaRow from "../MediaRow";
import Layout from "../Layout";
import { tvShowInfo} from "../../myInfo";
export default function Watchlist(){
    return (
        <Layout>
            <div className="podcasts-container">
                <MediaRow header="My Watchlist" isPodcast={false} dataArray={tvShowInfo.filter(show=> show.status === "To Watch")} />
            </div>
        </Layout>
    );
}