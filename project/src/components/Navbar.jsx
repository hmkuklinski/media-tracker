import {useState, useEffect} from "react";
import { NavLink, useLocation} from "react-router-dom";

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [showHamburger, setShowHamburger]= useState(false);

  
  //get the current path using location:
  const location = useLocation();
  const path = location.pathname;
  
  //check if the user is on mobile:
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //toggles the menu options display:
  const toggleHamburger=()=>{
    setShowHamburger(prev =>!prev);
  }

  const myLinks = [
    {id:"home", text:"Home", link:"/"},
    {id:"podcast", text:"Podcasts", link:"/podcast"},
    {id:"tv", text:"TV Shows", link:"/tv"},
    {id:"movies", text:"Movies", link:"/movies"},
  ];

  let pageTitle="Hannah's Media";
  if (path === "/") pageTitle = "Home";
  else if (path.startsWith("/podcast")) pageTitle = "Podcasts";
  else if (path.startsWith("/tv")) pageTitle = "TV Shows";

  

  //The actual nav links themselves:
  const navUl = (
    <ul>
      <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
      <li className="dropdown">
        <span><NavLink to="/podcast" className={({ isActive }) => isActive ? "active" : ""}>Podcasts</NavLink></span>
        <ul className="dropdown-menu">
          <li><NavLink to="/podcast/current" className={({ isActive }) => isActive ? "active" : ""}>Now Listening</NavLink></li>
          <li><NavLink to="/podcast/queue" className={({ isActive }) => isActive ? "active" : ""}>Queue</NavLink></li>
          <li><NavLink to="/podcast/complete" className={({ isActive }) => isActive ? "active" : ""}>Completed</NavLink></li>
          <li className="dropdown-submenu">
            <span><NavLink to="/podcast" className={({ isActive }) => isActive ? "active" : ""}>Podcast Categories  <ion-icon name="chevron-forward-outline"></ion-icon></NavLink></span>
            <ul className="dropdown-submenu-menu">
              <li><NavLink to="/podcast/tv-film" className={({ isActive }) => isActive ? "active" : ""}>TV/Film</NavLink></li>
              <li><NavLink to="/podcast/comedy" className={({ isActive }) => isActive ? "active" : ""}>Comedy</NavLink></li>
              <li><NavLink to="/podcast/society" className={({ isActive }) => isActive ? "active" : ""}>Society</NavLink></li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <span><NavLink to="/tv" className={({ isActive }) => isActive ? "active" : ""}>TV</NavLink></span>
        <ul className="dropdown-menu">
          <li><NavLink to="/tv/current" className={({ isActive }) => isActive ? "active" : ""}>Now Watching</NavLink></li>
          <li><NavLink to="/tv/watchlist" className={({ isActive }) => isActive ? "active" : ""}>Watchlist</NavLink></li>
          <li><NavLink to="/tv/complete" className={({ isActive }) => isActive ? "active" : ""}>Watched</NavLink></li>
          {/* tv category drop down */}
          <li className="dropdown-submenu">
            <span><NavLink to="/tv" className={({ isActive }) => isActive ? "active" : ""}>TV Categories   <ion-icon name="chevron-forward-outline"></ion-icon></NavLink></span>
            <ul className="dropdown-submenu-menu">
              <li><NavLink to="/tv/action" className={({ isActive }) => isActive ? "active" : ""}>Action</NavLink></li>
              <li><NavLink to="/tv/comedy" className={({ isActive }) => isActive ? "active" : ""}>Comedy</NavLink></li>
              <li><NavLink to="/tv/crime" className={({ isActive }) => isActive ? "active" : ""}>Police</NavLink></li>
              <li><NavLink to="/tv/criminal" className={({ isActive }) => isActive ? "active" : ""}>Criminal/Vigilantes</NavLink></li>
              <li><NavLink to="/tv/documentary" className={({ isActive }) => isActive ? "active" : ""}>Documentary</NavLink></li>
              <li><NavLink to="/tv/fire" className={({ isActive }) => isActive ? "active" : ""}>Fire</NavLink></li>
              {/* international dropdown */}
              <li className="dropdown-submenu2">
                <span><NavLink to="/tv/international" className={({ isActive }) => isActive ? "active" : ""}>International <ion-icon name="chevron-forward-outline"></ion-icon></NavLink></span>
                <ul className="dropdown-submenu2-menu">
                <li><NavLink to="/tv/japanese" className={({ isActive }) => isActive ? "active" : ""}>Japanese</NavLink></li>
                <li><NavLink to="/tv/korean" className={({ isActive }) => isActive ? "active" : ""}>Korean</NavLink></li> 
                <li><NavLink to="/tv/mandarin" className={({ isActive }) => isActive ? "active" : ""}>Mandarin</NavLink></li> 
                <li><NavLink to="/tv/thai" className={({ isActive }) => isActive ? "active" : ""}>Thai</NavLink></li>
                </ul>
              </li>
              <li><NavLink to="/tv/law" className={({ isActive }) => isActive ? "active" : ""}>Law/Political</NavLink></li>
              <li><NavLink to="/tv/medical" className={({ isActive }) => isActive ? "active" : ""}>Medical</NavLink></li>
              <li><NavLink to="/tv/medieval" className={({ isActive }) => isActive ? "active" : ""}>Medieval</NavLink></li>
              <li><NavLink to="/tv/supernatural" className={({ isActive }) => isActive ? "active" : ""}>SciFi</NavLink></li>
              <li><NavLink to="/tv/superhero" className={({ isActive }) => isActive ? "active" : ""}>Superhero</NavLink></li>
              <li><NavLink to="/tv/thriller" className={({ isActive }) => isActive ? "active" : ""}>Thriller</NavLink></li>
            </ul>
          </li>
          
        </ul>
      </li>
      <li className="dropdown">
        <span><NavLink to="/movies" className={({ isActive }) => isActive ? "active" : ""}>Movies</NavLink></span>
        <ul className="dropdown-menu">
          <li><NavLink to="/movies/current" className={({ isActive }) => isActive ? "active" : ""}>Now Watching</NavLink></li>
          <li><NavLink to="/movies/queue" className={({ isActive }) => isActive ? "active" : ""}>Watchlist</NavLink></li>
          <li><NavLink to="/movies/complete" className={({ isActive }) => isActive ? "active" : ""}>Completed</NavLink></li>
          <li className="dropdown-submenu">
            <span><NavLink to="/podcast" className={({ isActive }) => isActive ? "active" : ""}>Movie Categories  <ion-icon name="chevron-forward-outline"></ion-icon></NavLink></span>
            <ul className="dropdown-submenu-menu">
              <li><NavLink to="/movies/action" className={({ isActive }) => isActive ? "active" : ""}>Action</NavLink></li>
              <li><NavLink to="/movies/classic" className={({ isActive }) => isActive ? "active" : ""}>Classics</NavLink></li>
              <li><NavLink to="/movies/comedy" className={({ isActive }) => isActive ? "active" : ""}>Comedy</NavLink></li>
              <li><NavLink to="/movies/international" className={({ isActive }) => isActive ? "active" : ""}>International</NavLink></li>
              <li><NavLink to="/movies/romance" className={({ isActive }) => isActive ? "active" : ""}>Romance</NavLink></li>
              <li><NavLink to="/movies/thriller" className={({ isActive }) => isActive ? "active" : ""}>Thrillers</NavLink></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  );
   const navMobile = (
    <ul>
        {myLinks.map((nav)=>(
            <li onClick={() => setShowHamburger(false)}><NavLink to={nav.link} className={({ isActive }) => isActive ? "active" : ""}>{nav.text}</NavLink></li>
        ))}
    </ul>
  );

  //hamburger menu option for mobile:
  const mobileBtn = (
    <div className="nav-button">
      <button className="hamburger" onClick={toggleHamburger}>☰</button>
    </div>
  );

  if (isMobile){
    return (
      <nav className="nav-mobile">
        <div className="active-page">
          <h2>{pageTitle}</h2>
        </div>
        {mobileBtn}
        <div className="nav-options" style={{display: showHamburger? "block": "none"}}>
          {navMobile}
        </div>
      </nav>
    )
  }
  return (
    <nav className="nav">
      {navUl}
    </nav>
  );
}
