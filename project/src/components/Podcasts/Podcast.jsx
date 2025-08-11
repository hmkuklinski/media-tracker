export default function Podcast(props){
    return (
        <div className="podcast-container">
            <img src={props.imgsrc} alt={props.id} onClick={props.onClick} draggable={false} />
        </div>
    );
}