export default function TvShow(props){
    return (
        <div className="tv-container">
            <img src={props.isMobile? props.altimg: props.imgsrc} alt={props.id} onClick={props.onClick} draggable={false}/>
        </div>
    );
}