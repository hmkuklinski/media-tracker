export default function TVShow(props){
    return (
        <div className="show-container">
            <img src={props.imgsrc} alt={props.id} />
        </div>
    );
}