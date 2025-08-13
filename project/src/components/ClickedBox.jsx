export default function ClickedBox({ ep = { genres: [], hosts: [] }, onClose, dataType }){
    
    let imageSrc;
    if (dataType==="documentary" || dataType==="anime" || dataType==="movie" || dataType==="podcast"){
        imageSrc = ep.altimg;
    }
    else{
        imageSrc = ep.imgsrc;
    }
    return(
        <div className="clicked-box">
            <div className="clicked-box-exit" onClick={onClose}>X</div>
            <div className="clicked-content">
                <div className="clicked-title"><h1>{ep.title}</h1></div>
                <div className="clicked-img">
                    <img src={imageSrc} alt={ep.id} />
                </div>
                <div className="clicked-info">
                    {ep.hosts && (
                        <div className="tv-genres">
                            <h4>
                            <b>Hosts: </b>{ep.hosts.join(", ")}
                            </h4>
                        </div>
                    )}
                    {ep.genres && (
                        <div className="tv-genres">
                            <h4>
                            <b>Genre: </b>{ep.genres.join(", ")}
                            </h4>
                        </div>
                    )}

                    {ep.rating !=="" && (
                        <div className="tv-rating">
                            <h4><b>Rating: </b>{ep.rating}</h4>
                        </div>
                    )}
                    <div className="watch-status">
                        <h4>
                             
                            {ep.status==="Complete" && "✅ Completed"}
                            {(ep.status==="Watching" || ep.status === "Streaming") && "👀 Now Watching"}
                            {ep.status==="To Watch" && "📝 On Watchlist"}
                        </h4>
                    </div>
                    <div className="ep-desc">
                        <p>{ep.desc}</p>
                    </div>
                    
                    {ep.watchOn && (
                        <div className="tv-site">
                            <h4>
                                <b>Watch On: </b> {ep.watchOn}
                            </h4>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}