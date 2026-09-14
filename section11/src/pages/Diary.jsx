import { useParams } from "react-router-dom";
import Viewer from "../components/Viewer/Viewer.jsx";

const Diary = () => {
    const params = useParams();
    console.log(params);

    return (
        <div>

            <Viewer />
        </div>
    );
}

export default Diary;