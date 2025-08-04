import './App.css';
import Podcasts from './components/Podcasts/Podcasts';
import TvShows from './components/TV/TvShows';
import Home from './components/Home/Home';
import {Routes, Route} from "react-router-dom";
import PodcastTv from './components/Podcasts/PodcastTv';
import PodcastComedy from './components/Podcasts/PodcastComedy';
import PodcastCurrent from './components/Podcasts/PodcastCurrent';
import Comedy from './components/TV/Comedy';
import Crime from './components/TV/Crime';
import Criminal from './components/TV/Criminal';
import Thriller from './components/TV/Thriller';
import Law from './components/TV/Law';
import Medical from './components/TV/Medical';
import Fire from './components/TV/Fire';
import Supernatural from './components/TV/Supernatural';
import SuperHero from './components/TV/SuperHero';
import Action from './components/TV/Action';
import Medieval from './components/TV/Medieval';
import CurrentTv from './components/TV/CurrentTv';
import Completed from './components/TV/Completed';
import Watchlist from './components/TV/Watchlist';
import Queue from './components/Podcasts/Queue';
import PodcastComplete from './components/Podcasts/PodcastComplete';


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
        <Route path="/tv/complete" element={<Completed />} />
        <Route path="/tv/watchlist" element={<Watchlist />} />
        <Route path="/tv/current" element={<CurrentTv />} />
        
        <Route path="/tv/comedy" element={<Comedy />} />
        <Route path="/tv/crime" element={<Crime />} />
        <Route path="/tv/criminal" element={<Criminal />} />
        <Route path="/tv/fire" element={<Fire />} />
        <Route path="/tv/law" element={<Law />} />
        <Route path="/tv/medical" element={<Medical />} />
        <Route path="/tv/medieval" element={<Medieval />} />
        <Route path="/tv/action" element={<Action />} />
        <Route path="/tv/supernatural" element={<Supernatural />} />
        <Route path="/tv/superhero" element={<SuperHero />} />
        <Route path="/tv/thriller" element={<Thriller />} />
      </Routes>
    </div>
  );
}

export default App;
