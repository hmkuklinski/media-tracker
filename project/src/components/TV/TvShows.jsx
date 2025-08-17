import MediaRow from "../MediaRow";
import Layout from "../Layout";
import { tvShowInfo, genreTitles, internationalInfo, childhoodFaves } from "../../myInfo";
export default function TvShows(){
    //declare the genres to allow for an easy map of each section! :D
    const myGenres = ["Action", "Comedy", "Crime", "Criminal", "Fire", "Medical", "Political", "Supernatural", "Superhero", "Thriller"];
    return (
        <Layout>
            <div className="tvs-container">
                <MediaRow header="My Watchlist" dataType="tv" dataArray={tvShowInfo.filter(show=> show.status === "Watching" || show.status === "Streaming")} />
                {myGenres.map((genre)=>(
                    <MediaRow header={genreTitles[genre]} dataType="tv" dataArray={tvShowInfo.filter(show=> show.genres[0]===(genre))} />
                ))}
                <MediaRow header="International Dramas" dataType="tv" dataArray={internationalInfo} />
                <MediaRow header="Childhood Favorites" dataType="movie" dataArray={childhoodFaves} />
            </div>
        </Layout>
    );
}