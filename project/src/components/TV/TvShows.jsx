import MediaRow from "../MediaRow";
import Layout from "../Layout";
import { tvShowInfo, genreTitles } from "../../myInfo";
export default function TvShows(){
    //declare the genres to allow for an easy map of each section! :D
    const myGenres = ["Action", "Comedy", "Crime", "Criminal", "Fire", "Law", "Medical", "Political", "Supernatural", "Superhero", "Thriller"];
    return (
        <Layout>
            <div className="podcasts-container">
                <MediaRow header="Currently Watching" isPodcast={false} dataArray={tvShowInfo.filter(show=> show.status === "Watching" || show.status === "Streaming")} />
                {myGenres.map((genre)=>(
                    <MediaRow header={genreTitles[genre]} isPodcast={false} dataArray={tvShowInfo.filter(show=> show.genres.includes(genre))} />
                ))}
            </div>
        </Layout>
    );
}