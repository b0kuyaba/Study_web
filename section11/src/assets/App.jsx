import './App.css'
import {Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home.jsx"
import Diary from "./pages/Diary.jsx"
import New from "./pages/New.jsx"
import Notfound from "./pages/Notfound.jsx";

function App() {

  return (
      <>
        <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/new"}>New</Link>
          <Link to={"/diary"}>Diary</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/new" element={<New />}/>
          <Route path="/diary" element={<Diary />}/>
          <Route path="*" element={<Notfound />}/>
        </Routes>
      </>
  );
}

export default App
