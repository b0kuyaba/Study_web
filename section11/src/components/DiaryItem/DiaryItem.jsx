import "./DiaryItem.css"
import { getEmotionImage } from "../../util/get-emotion-image.js";
import Button from "../Button/Button.jsx"

const DiaryItem = ({id, emotionId, createdDate, content})=>{
    return (
        <div className="DiaryItem">
            <div className={`img_section img_section_${emotionId}`}>
                <img src={getEmotionImage(emotionId)} alt=""/>
            </div>
            <div className="info_section">
                <div className="created_date">
                    {new Date(createdDate).toLocaleDateString()}
                </div>
                <div className="content">
                    {content}
                </div>
            </div>
            <div className="button_section">
                <Button text={"수정하기"}/>
            </div>
        </div>
    )
}

export default DiaryItem;