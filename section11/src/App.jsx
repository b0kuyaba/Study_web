import './App.css'
import {useReducer, useRef} from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Diary from "./pages/Diary.jsx"
import New from "./pages/New.jsx"
import Edit from "./pages/Edit.jsx"
import Notfound from "./pages/Notfound.jsx";

const mockData = [
    {
        id: 1,
        createdDate: new Date().getTime(),
        emotionId : 1,
        content: "1번 일기 내용",
    },
    {
        id: 2,
        createdDate: new Date().getTime(),
        emotionId : 2,
        content: "2번 일기 내용",
    },
]

function Reducer(state,action){
    switch (action.type) {
        case "CREATE": return [action.data, ...state]
    }
}

function App() {
    const [data, dispatch] = useReducer(Reducer, mockData);
    const idRef = useRef(3);

    const onCreate = (createdDate, emotionId, content) => {
        dispatch({
            type:"CREATE",
            data: {
                id: idRef.current++,
                createdDate,
                emotionId,
                content,
            },
        });
    }
  return (
      <>
          <button onClick={() => {
              onCreate(new Date().getTime(), 1, "Hello")
          }}
          >일기 추 테스트</button>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/new" element={<New />}/>
            <Route path="/diary/:id" element={<Diary />}/>
            <Route path={"/edit/:id"} element={<Edit />}/>
            <Route path="*" element={<Notfound />}/>
          </Routes>
      </>
  );
}

export default App
