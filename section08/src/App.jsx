import './App.css'
import { useState } from "react";
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";

function App() {
    const mockData = [
        {

        }
    ]
    const [todos, setTodos] = useState( [] )
  return (
    <div className="App">
      <Header/>
      <Editor/>
      <List />
    </div>
  )
}

export default App
