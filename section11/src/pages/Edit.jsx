import {useParams, useNavigate} from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Button from "../components/Button/Button.jsx";
import Editor from "../components/Editor/Editor.jsx";

const Edit = () => {
    const prams = useParams();
    const nav = useNavigate();
    return (
        <div>
            <Header
                title={"일기 수정하기"}
                leftChild={<Button onClick={() => {nav(-1)}} text={"< 뒤로가기"}/>}
                rightChild={<Button text={"삭제하기"} type={"NEGATIVE"}/>}
            />
            <Editor />
        </div>
    );
};

export default Edit;