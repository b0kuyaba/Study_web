import Header from "../components/Header/Header.jsx"
import Button from "../components/Button/Button.jsx"
import Editor from "../components/Editor/Editor.jsx";
import {useNavigate} from "react-router-dom";


const New = () => {
    const nav = useNavigate();

    return (
        <div>
            <Header
                title={"새 일기 쓰기"}
                leftChild={
                    <Button onClick={() => {nav(-1)}} text={"< 뒤로 가기"}/>
                }
            />
            <Editor />
        </div>
    )
}

export default New;