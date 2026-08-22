import './List.css'
import Todoitem from "./Todoitem.jsx";
const List = () => {
    return (
    <div className="List">
        <h4>Todo List🌱</h4>
        <input placeholder="검색어를 입력하세요"/>
        <div>
            <Todoitem />
            <Todoitem />
            <Todoitem />
        </div>
    </div>
    );
};

export default List;