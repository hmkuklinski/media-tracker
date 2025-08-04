export default function TvShow(props){
    return (
        <div className="tv-container">
            <img src={props.imgsrc} alt={props.id} draggable={false}/>
        </div>
    );
}