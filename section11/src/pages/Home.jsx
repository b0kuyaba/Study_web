import Header from "../components/Header/Header.jsx"
import Button from "../components/Button/Button.jsx"
import DiaryList from "../components/DiaryList/DiaryList.jsx";

const Home = () => {

    return (
        <div>
            <Header
                title={"2024년 2월"}
                leftChild={<Button text={"<"}/>}
                rightChild={<Button text={">"}/>}
            />
            <DiaryList />
        </div>
    );
};

export default Home;