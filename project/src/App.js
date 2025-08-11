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
import { chineseDramaInfo, documentaryInfo, kdramaInfo, thaiDramaInfo, tvShowInfo } from './myInfo';
import International from './components/TV/International';
import Japanese from './components/TV/Japanese';


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
        <Route path="/tv/korean" element={<Category list={kdramaInfo} filterProp="genres" filterText="Korean" key="Korean"isMain={true}/>} />
        <Route path="/tv/mandarin" element={<Category list={chineseDramaInfo} filterProp="genres" filterText="Mandarin" key="Mandarin"isMain={true}/>} />
        <Route path="/tv/thai" element={<Category list={thaiDramaInfo} filterProp="genres" filterText="Thai" key="Thai"isMain={true}/>} />
      </Routes>
    </div>
  );
}

export default App;
