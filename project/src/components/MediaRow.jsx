import TvShow from './TV/TvShow';
import Podcast from './Podcasts/Podcast';
import { useRef, useState} from 'react'; //for click scroll
import { ScrollMenu} from 'react-horizontal-scrolling-menu'; //for touchscreen scroll
import AnimeMovie from './AM/AnimeMovie';
import ClickedBox from './ClickedBox';

export default function MediaRow({dataType, header, dataArray}){
    //get reference:
    const myRef = useRef(null);

    //the pop up box when clicking on an item
    const [clickedItem, setClickedItem] = useState(null);
    const [seeBox, setSeeBox] = useState(false);

    //track whether user is dragging or not:
    const [isDragging, setIsDragging]= useState(false);
    
    //for getting X starting location and for generating the scroll movement:
    const [startingX, setStartingX]= useState(0);
    const [scrollLeft, setScrollLeft]= useState(0);

    //user clicks the left mouse button:
    const onMouseDown= (e) =>{
        //toggle isDragging:
        setIsDragging(true);
        
        //get starting x position
        setStartingX(e.pageX- myRef.current.offsetLeft);
        setScrollLeft(myRef.current.scrollLeft);
    }

    //reset isDragging toggle: leaves target area or releases button
    const onMouseLeave = () => setIsDragging(false);
    const onMouseUp = () => setIsDragging(false);

    //tracking where user moves mouse:
    const onMouseMove = (e) => {
        //if not dragging, return
        if (!isDragging){
            return;
        }
        //prevent default for image dragging
        //NOTE: had to add draggable property to img tag too
        e.preventDefault();

        //get current x position:
        const myX = e.pageX- myRef.current.offsetLeft;

        //scroll distance
        const newX = (myX-startingX) *1.5;
        myRef.current.scrollLeft = scrollLeft - newX;
    }

    //since reusing for podcast and show, check if its a podcast or show and use component as expected
    let content = dataArray.map(item => {
        //toggle for the pop up button display
        const handleClick = () => {
                if (!isDragging) { // only trigger if not dragging
                    setClickedItem(item);
                    setSeeBox(true);
                }
            };

            //pass on handleClick so it can show
            //TvShow--> want to show the cover photo, so set isMobile to true (use false for clickBox)
            return dataType === "podcast"
                ? <Podcast key={item.id} {...item} onClick={handleClick} />
                : dataType === "tv"
                ? <TvShow key={item.id} {...item} onClick={handleClick} isMobile={true}/>
                : (dataType === "movie" || dataType === "anime" || dataType === "documentary")
                ? <AnimeMovie key={item.id} {...item} onClick={handleClick} isMobile={true} />
                : null;
    });



    let contentDiv =  (
        <div className="media-row-container">
            <div className="media-row-header">
                <h3>{header}</h3>
            </div>
            {/* add the mouse functions to this div, for its container that we'll be scrolling in */}
            <div
                className="media-row"
                ref={myRef}
                onMouseDown={onMouseDown}
                onMouseLeave={onMouseLeave}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
            >
                <ScrollMenu>
                    {content}
                </ScrollMenu>
            </div>
            
        </div>
        );

    return (
        <div>
            {contentDiv}
            {seeBox && (
                <div>
                    <div className="backdrop-blur"></div>
                    <ClickedBox 
                        ep={clickedItem} 
                        dataType={dataType}
                        onClose={() => setSeeBox(false)}
                    />
                </div>
            )}
        </div>
    );
}