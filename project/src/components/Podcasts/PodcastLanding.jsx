export default function PodcastLanding(props){
    return (
        <div className="pod-landing-container" >
            <div className="pod-img">
                <img src={props.altimg} alt={props.id} />
            </div>
            <div className="pod-content-main">
                <div className="pod-content">
                    <div className="pod-title">
                        <h2>{props.title}</h2>
                    </div>
                    
                    <div className="pod-hosts">
                        <h4>
                            <b>Hosts: </b> {props.hosts.join(" and ")}
                        </h4>
                    </div>
                    <div className="pod-genres">
                        <h4>
                        <b>Genre: </b>{props.genres.join(", ")}
                        </h4>
                    </div>
                    {props.rating !=="" && (
                        <div className="pod-rating">
                            {props.rating}
                        </div>
                    )}

                    <div className="pod-desc">
                        <p>{props.desc}</p>
                    </div>
                    
                   
                </div>
            </div>
        </div>
    )
}