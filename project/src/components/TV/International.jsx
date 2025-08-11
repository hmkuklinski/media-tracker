import { thaiDramaInfo, kdramaInfo, chineseDramaInfo } from "../../myInfo";
import Category from "./Category";
import Japanese from "./Japanese";
import Layout from "../Layout";

//note: need to finish the genres section for japanese, korean, and mandarin to display each section as expected!!!
export default function International(){
    const japaneseContent = <Japanese isMain={false} />;
    const koreanContent = <Category list={kdramaInfo} filterProp="genres" filterText="Korean" key="Korean"/>;
    const mandarinContent= <Category list={chineseDramaInfo} filterProp="genres" filterText="Mandarin" key="Mandarin"/>;
    const thaiContent = <Category list={thaiDramaInfo} filterProp="genres" filterText="Thai" key="Thai"/>;
    return (
        <Layout>
            {japaneseContent}
            {koreanContent}
            {mandarinContent}
            {thaiContent}

        </Layout>
    );
}