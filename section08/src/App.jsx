import './App.css'
import { useState } from "react";
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";

const mockData = [
    {
        id: 0,
        isDone: false,
        content: "React 공부하기",
        data: new Date().getDate(),
    },
    {
        id: 1,
        isDone: false,
        content: "빨래하기",
        data: new Date().getDate(),
    },
    {
        id: 2,
        isDone: false,
        content: "노래 연습하기",
        data: new Date().getDate(),
    },
];

function App() {
    const [todos, setTodos] = useState( mockData )

    const onCreate = (content) => {
        const newTodo = {
            id: 0,
            isDone: false,
            content: content,
            data: new Date().getTime()
        }

        setTodos([newTodo, ...todos]);
    }

  return (
    <div className="App">
      <Header/>
      <Editor onCreate={onCreate}/>
      <List />
    </div>
  );
}

export default App
