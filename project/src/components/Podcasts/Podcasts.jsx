import MediaRow from "../MediaRow";
import Layout from "../Layout";
import { podcastInfo } from "../../myInfo";
export default function Podcasts(){
    //declare the genres to allow for an easy map of each section! :D
    const myGenres = ["Comedy", "TV/Film", "Society"];
    
    return (
        <Layout>
            <div className="podcasts-container">
                <MediaRow header="Currently Listening" dataType="podcast" dataArray={podcastInfo.filter(podcast=> podcast.status === "Listening")} />
                {myGenres.map((genre)=>(
                    <MediaRow header={genre} dataType="podcast" dataArray={podcastInfo.filter(podcast=> podcast.genres.includes(genre))} />
                ))}
            </div>
        </Layout>
    );
}