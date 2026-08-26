import "./TodoItem.css"
const TodoItem = ({id, isDone, content, date}) => {
    return (
        <div className="TodoItem">
            <input checked={isDone} type="checkbox"/>
            <div className="Content">{content}</div>
            <div className="Date">
                {new Date(date).toLocaleDateString()}
            </div>
            <button>삭제</button>
        </div>
    );
}

export default TodoItem