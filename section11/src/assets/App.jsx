import './App.css'
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx"
import Diary from "./pages/Diary.jsx"
import New from "./pages/New.jsx"

function App() {

  return <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/new" element={<New />}/>
    <Route path="/diary" element={<Diary />}/>
  </Routes>;
}

export default App
