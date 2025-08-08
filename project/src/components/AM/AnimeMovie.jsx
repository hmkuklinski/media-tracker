export default function AnimeMovie(props){
    return (
        <div className="anime-movie-container">
            <img src={props.imgsrc} alt={props.id} draggable={false}/>
        </div>
    );
}