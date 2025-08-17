import Layout from "../Layout";
import { childhoodMovies, genreTitlesMovies, internationalFilms, myMovies} from "../../myInfo";
import MediaRow from '../MediaRow';

export default function Movies(){
        //declare the genres to allow for an easy map of each section! :D
        const myGenres = ["Action", "Comedy","Classic", "Documentary","Horror", "Romance" ];
        return (
            <Layout>
                <div className="tvs-container">
                    <MediaRow header="My Movie List" dataType="movie" dataArray={myMovies} />
                    {myGenres.map((genre)=>(
                        <MediaRow header={genreTitlesMovies[genre]} dataType="movie" dataArray={myMovies.filter(show=> show.genres[0]===(genre))} />
                    ))}
                    <MediaRow header="International Dramas" dataType="movie" dataArray={internationalFilms} />
                    <MediaRow header="Childhood Favorites" dataType="movie" dataArray={childhoodMovies} />
                </div>
            </Layout>
        );
}