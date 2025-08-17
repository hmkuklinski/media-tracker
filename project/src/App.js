import './App.css';
import Podcasts from './components/Podcasts/Podcasts';
import TvShows from './components/TV/TvShows';
import Home from './components/Home/Home';
import {Routes, Route} from "react-router-dom";
import Category from './components/TV/Category';
import PodCategory from './components/Podcasts/PodCategory';
import { childhoodMovies, chineseDramaInfo, documentaryInfo, internationalFilms, kdramaInfo, myMovies, thaiDramaInfo, tvShowInfo } from './myInfo';
import International from './components/TV/International';
import Japanese from './components/TV/Japanese';
import Movies from './components/AM/Movies';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/podcast" element={<Podcasts />} />
        <Route path="/podcast/current" element={<PodCategory header="Currently Listening" isCategory={false} filterText="Listening" />} />
        <Route path="/podcast/queue" element={<PodCategory header="Podcast Queue" isCategory={false} filterText="To Listen" />} />
        <Route path="/podcast/complete" element={<PodCategory header="Completed Podcasts" isCategory={false} filterText="Completed" />} />
        <Route path="/podcast/tv-film" element={<PodCategory header="TV/Film" isCategory={true} filterText="TV/Film" />} />
        <Route path="/podcast/comedy" element={<PodCategory header="Comedy" isCategory={true} filterText="Comedy" />} />
        <Route path="/podcast/society" element={<PodCategory header="Society" isCategory={true} filterText="Society" />} />

        <Route path="/tv" element={<TvShows />} />
        <Route path="/tv/complete" element={<Category list={tvShowInfo} filterProp="status" filterText="Watched" key="Completed"isMain={true} /> } />
        <Route path="/tv/watchlist" element={<Category list={tvShowInfo} filterProp="status" filterText="To Watch" key="Watchlist"isMain={true} />} />
        <Route path="/tv/current" element={<Category list={tvShowInfo} filterProp="status" filterText="Streaming"key="Current"isMain={true} />} />
        
        <Route path="/tv/comedy" element={<Category list={tvShowInfo} filterProp="genres" filterText="Comedy" key="Comedy" isMain={true}/>} />
        <Route path="/tv/crime" element={<Category list={tvShowInfo} filterProp="genres" filterText="Crime" key="Crime"isMain={true}/>} />
        <Route path="/tv/criminal" element={<Category list={tvShowInfo} filterProp="genres" filterText="Criminal" key="Criminal"isMain={true}/>} />
        <Route path="/tv/fire" element={<Category list={tvShowInfo} filterProp="genres" filterText="Fire" key="Fire"isMain={true}/>} />
        <Route path="/tv/law" element={<Category list={tvShowInfo} filterProp="genres" filterText="Law" key="Law"isMain={true}/>} />
        <Route path="/tv/medical" element={<Category list={tvShowInfo} filterProp="genres" filterText="Medical" key="Medical"isMain={true}/>} />
        <Route path="/tv/medieval" element={<Category list={tvShowInfo} filterProp="genres" filterText="Medieval" key="Medieval"isMain={true} />} />
        <Route path="/tv/action" element={<Category list={tvShowInfo} filterProp="genres" filterText="Action" key="Action"isMain={true}/>} />
        <Route path="/tv/supernatural" element={<Category list={tvShowInfo} filterProp="genres" filterText="Supernatural" key="Supernatural"isMain={true}/>} />
        <Route path="/tv/superhero" element={<Category list={tvShowInfo} filterProp="genres" filterText="Superhero" key="Superhero"isMain={true}/>} />
        <Route path="/tv/thriller" element={<Category list={tvShowInfo} filterProp="genres" filterText="Thriller" key="Thriller"isMain={true}/>} />
        <Route path="/tv/political" element={<Category list={tvShowInfo} filterProp="genres" filterText="Political" key="Political"isMain={true}/>} />
        <Route path="/tv/documentary" element={<Category list={documentaryInfo} filterProp="genres" filterText="Documentary" key="Documentary" dataType="documentary" isMain={true}/>} />
        <Route path="/tv/international" element={<International />} />
        <Route path="/tv/japanese" element={<Japanese isMain={true}/>} />
        <Route path="/tv/korean" element={<Category list={kdramaInfo} filterProp="genres" filterText="Korean" key="Korean"isMain={true} />} />
        <Route path="/tv/mandarin" element={<Category list={chineseDramaInfo} filterProp="genres" filterText="Mandarin" key="Mandarin"isMain={true}/>} />
        <Route path="/tv/thai" element={<Category list={thaiDramaInfo} filterProp="genres" filterText="Thai" key="Thai"isMain={true}/>} />

        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/complete" element={<Category list={myMovies} filterProp="status" filterText="Watched" key="Watched"isMain={true} dataType="movie" /> } />
        <Route path="/movies/queue" element={<Category list={myMovies} filterProp="status" filterText="To Watch" key="To Watch"isMain={true} dataType="movie"/>} />
        
        <Route path="/movies/action" element={<Category list={myMovies} filterProp="genres" filterText="Action" key="mAction" isMain={true} dataType="movie"/>} />
        <Route path="/movies/classic" element={<Category list={myMovies} filterProp="genres" filterText="Classic" key="mClassic" isMain={true} dataType="movie"/>} />
        <Route path="/movies/comedy" element={<Category list={myMovies} filterProp="genres" filterText="Comedy" key="mComedy"isMain={true} dataType="movie"/>} />
        <Route path="/movies/horror" element={<Category list={myMovies} filterProp="genres" filterText="Horror" key="mhorror"isMain={true} dataType="movie"/>} />
        <Route path="/movies/international" element={<Category list={internationalFilms} filterProp="genres" filterText="International" key="mInternational"isMain={true} dataType="movie"/>} />
        <Route path="/movies/romance" element={<Category list={myMovies} filterProp="genres" filterText="Romance" key="mRomance"isMain={true} dataType="movie"/>} />
        <Route path="/movies/childhood" element={<Category list={childhoodMovies} filterProp="genres" filterText="Childhood" key="mkids"isMain={true} dataType="movie"/>} />
        <Route path="/movies/thriller" element={<Category list={myMovies} filterProp="genres" filterText="Thriller" key="Thriller"isMain={true} dataType="movie"/>} />
      </Routes>
    </div>
  );
}

export default App;
