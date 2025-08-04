import MediaRow from "../MediaRow";
import Layout from "../Layout";
import { tvShowInfo} from "../../myInfo";
export default function Completed(){
    return (
        <Layout>
            <div className="podcasts-container">
                <MediaRow header="Watched" isPodcast={false} dataArray={tvShowInfo.filter(show=> show.status === "Watched")} />
            </div>
        </Layout>
    );
}