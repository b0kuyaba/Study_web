import { useParams,useNavigate } from "react-router-dom";
import Viewer from "../components/Viewer/Viewer.jsx";
import Header from "../components/Header/Header.jsx";
import Button from "../components/Button/Button.jsx";

const Diary = () => {
    const nav = useNavigate();
    const params = useParams();
    console.log(params);

    return (
        <div>
            <Header
            title={"yyyy-mm-dd 기록"}
            leftChild={
                <Button
                    onClick={() => {nav(- 1)}}
                    text={"< 뒤로가기"}/>}
            rightChild={<Button text={"수정하기"}/>}
            />
            <Viewer />
        </div>
    );
}

export default Diary;