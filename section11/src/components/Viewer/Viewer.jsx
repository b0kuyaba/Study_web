import "./Viewer.css"
import {getEmotionImage} from "../../util/get-emotion-image.js";
import {emotionList} from "../../util/constants.js";
import emotionItem from "../EmotionItem/EmotionItem.jsx";

const Viewer = () => {
    const emotionId = 1;

    const emotionItem = emotionList.find(
        (item) => String(item.emotionId) === String(emotionId)
    );

    return (
        <div>
            <section className="img_section">
                <h4>오늘의 감정</h4>
                <div>
                    <img src={getEmotionImage(emotionId)} alt=""/>
                    <div>
                        {emotionItem.emotionName}</div>
                </div>
            </section>
            <section className="content_section"></section>
        </div>
    )
}

export default Viewer;