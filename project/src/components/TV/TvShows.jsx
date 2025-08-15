import MediaRow from "../MediaRow";
import Layout from "../Layout";
import { tvShowInfo, genreTitles } from "../../myInfo";
export default function TvShows(){
    //declare the genres to allow for an easy map of each section! :D
    const myGenres = ["Action", "Comedy", "Crime", "Criminal", "Fire", "Medical", "Political", "Supernatural", "Superhero", "Thriller", "International", "Anime"];
    return (
        <Layout>
            <div className="podcasts-container">
                <MediaRow header="My Watchlist" dataType="tv" dataArray={tvShowInfo.filter(show=> show.status === "Watching" || show.status === "Streaming")} />
                {myGenres.map((genre)=>(
                    <MediaRow header={genreTitles[genre]} dataType="tv" dataArray={tvShowInfo.filter(show=> show.genres.includes(genre))} />
                ))}
            </div>
        </Layout>
    );
}