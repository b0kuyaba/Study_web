import './App.css'
import {Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Diary from "./pages/Diary.jsx"
import New from "./pages/New.jsx"
import Notfound from "./pages/Notfound.jsx";
import Button from "./components/Button.jsx"

import { getEmotionImage } from "./util/get-emotion-image.js";

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  }
  return (
      <>
          <Button
              text={"123"}
              onClick={()=> {
                  console.log("123번 버튼 클릭!");
              }}
          />

          <Button
              text={"123"}
              type={"POSITIVE"}
              onClick={()=> {
                  console.log("123번 버튼 클릭!");
              }}
          />

          <Button
              text={"123"}
              type={"NEGATIVE"}
              onClick={()=> {
                  console.log("123번 버튼 클릭!");
              }}
          />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/new" element={<New />}/>
          <Route path="/diary/:id" element={<Diary />}/>
          <Route path="*" element={<Notfound />}/>
        </Routes>
      </>
  );
}

export default App
