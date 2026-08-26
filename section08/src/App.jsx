import './App.css'
import {useRef, useState} from "react";
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";

const mockData = [
    {
        id: 0,
        isDone: false,
        content: "React 공부하기",
        date: new Date().getDate(),
    },
    {
        id: 1,
        isDone: false,
        content: "빨래하기",
        date: new Date().getDate(),
    },
    {
        id: 2,
        isDone: false,
        content: "노래 연습하기",
        date: new Date().getDate(),
    },
];

function App() {
    const [todos, setTodos] = useState( mockData )
    const idRef = useRef(3)

    const onCreate = (content) => {
        const newTodo = {
            id: idRef.current++,
            isDone: false,
            content: content,
            date: new Date().getTime()
        }

        setTodos([newTodo, ...todos]);

        const onUpdate = (targetId) => {

            setTodos(todos.map(todo => {
                if (todo.id === targetId) {
                    return {
                        ...todo,

                    }
                }
            }))
        }
    }

  return (
    <div className="App">
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos}/>
    </div>
  );
}

export default App
