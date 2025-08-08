import MediaRow from "../MediaRow";
import Layout from "../Layout";
import { genreTitles, tvShowInfo } from "../../myInfo";
export default function SuperHero(){
    const genre="Superhero";
    return (
        <Layout>
            <div className="podcasts-container">
                <MediaRow header={genreTitles[genre]} dataType="tv" dataArray={tvShowInfo.filter(show=> show.genres.includes(genre))} />
            </div>
        </Layout>
    );
}