export default function TvLanding(props){
    return (
        <div className="tv-landing-container" style={{backgroundImage: props.switchPic ? `url(${props.altimg})` : `url(${props.imgsrc})`,backgroundRepeat: "no-repeat"}} id={props.id}>
            <div className="tv-content-main">
                <div className="tv-content">
                    <div className="tv-title">
                        <h2>{props.title}</h2>
                    </div>
                    {props.rating !=="" && (
                        <div className="tv-rating">
                            {props.rating}
                        </div>
                    )}

                    <div className="tv-desc">
                        <p>{props.desc}</p>
                    </div>
                    <div className="tv-genres">
                        <h4>
                        <b>Genre: </b>{props.genres.join(", ")}
                        </h4>
                    </div>
                    <div className="tv-site">
                        <h4>
                            <b>Watch On: </b> {props.watchOn}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}