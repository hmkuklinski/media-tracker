import './App.css';
import Podcasts from './components/Podcasts/Podcasts';
import TvShows from './components/TV/TvShows';
import Home from './components/Home/Home';
import {Routes, Route} from "react-router-dom";
import PodcastTv from './components/Podcasts/PodcastTv';
import PodcastComedy from './components/Podcasts/PodcastComedy';
import PodcastCurrent from './components/Podcasts/PodcastCurrent';
import Queue from './components/Podcasts/Queue';
import PodcastComplete from './components/Podcasts/PodcastComplete';
import Category from './components/TV/Category';
import { tvShowInfo } from './myInfo';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/podcast" element={<Podcasts />} />
        <Route path="/podcast/current" element={<PodcastCurrent />} />
        <Route path="/podcast/queue" element={<Queue />} />
        <Route path="/podcast/complete" element={<PodcastComplete />} />
        <Route path="/podcast/tv-film" element={<PodcastTv />} />
        <Route path="/podcast/comedy" element={<PodcastComedy />} />

        <Route path="/tv" element={<TvShows />} />
        <Route path="/tv/complete" element={<Category list={tvShowInfo} filterProp="status" filterText="Watched" key="Completed" />} />
        <Route path="/tv/watchlist" element={<Category list={tvShowInfo} filterProp="status" filterText="To Watch" key="Watchlist" />} />
        <Route path="/tv/current" element={<Category list={tvShowInfo} filterProp="status" filterText="Streaming"key="Current" />} />
        
        <Route path="/tv/comedy" element={<Category list={tvShowInfo} filterProp="genres" filterText="Comedy" key="Comedy" />} />
        <Route path="/tv/crime" element={<Category list={tvShowInfo} filterProp="genres" filterText="Crime" key="Crime"/>} />
        <Route path="/tv/criminal" element={<Category list={tvShowInfo} filterProp="genres" filterText="Criminal" key="Criminal"/>} />
        <Route path="/tv/fire" element={<Category list={tvShowInfo} filterProp="genres" filterText="Fire" key="Fire"/>} />
        <Route path="/tv/law" element={<Category list={tvShowInfo} filterProp="genres" filterText="Law" key="Law"/>} />
        <Route path="/tv/medical" element={<Category list={tvShowInfo} filterProp="genres" filterText="Medical" key="Medical"/>} />
        <Route path="/tv/medieval" element={<Category list={tvShowInfo} filterProp="genres" filterText="Medieval" key="Medieval" />} />
        <Route path="/tv/action" element={<Category list={tvShowInfo} filterProp="genres" filterText="Action" key="Action"/>} />
        <Route path="/tv/supernatural" element={<Category list={tvShowInfo} filterProp="genres" filterText="Supernatural" key="Supernatural"/>} />
        <Route path="/tv/superhero" element={<Category list={tvShowInfo} filterProp="genres" filterText="Superhero" key="Superhero"/>} />
        <Route path="/tv/thriller" element={<Category list={tvShowInfo} filterProp="genres" filterText="Thriller" key="Thriller"/>} />
        <Route path="/tv/political" element={<Category list={tvShowInfo} filterProp="genres" filterText="Political" key="Political"/>} />
        
      </Routes>
    </div>
  );
}

export default App;
