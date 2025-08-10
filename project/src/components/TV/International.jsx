import { thaiDramaInfo } from "../../myInfo";
import Category from "./Category";

//note: need to finish the genres section for japanese, korean, and mandarin to display each section as expected!!! 
export default function International(){
    // const japaneseContent = <Category list={japanDramaInfo} filterProp="genres" filterText="Japanese" key="Japanese"/>;
    // const koreanContent = <Category list={kdramaInfo} filterProp="genres" filterText="Korean" key="Korean"/>;
    // const mandarinContent= <Category list={chineseDramaInfo} filterProp="genres" filterText="Mandarin" key="Mandarin"/>;
    const thaiContent = <Category list={thaiDramaInfo} filterProp="genres" filterText="Thai" key="Thai"/>;
    return (
        <div className="international-container">
            {/* {koreanContent}
            {japaneseContent}
            {mandarinContent} */}
            {thaiContent}
        </div>
    );
}