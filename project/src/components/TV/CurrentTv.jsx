import MediaRow from "../MediaRow";
import Layout from "../Layout";
import { tvShowInfo} from "../../myInfo";
export default function CurrentTv(){
    return (
        <Layout>
            <div className="podcasts-container">
                <MediaRow header="Currently Watching" dataType="tv" dataArray={tvShowInfo.filter(show=> show.status === "Watching" || show.status === "Streaming")} />
            </div>
        </Layout>
    );
}