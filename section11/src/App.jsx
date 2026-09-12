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
        case "CREATE":
            return [action.data, ...state]
        case "UPDATE":
            return state.map((item) =>
                String(item.id) === String(action.data.id)
                    ? action.data
                    : item
            );
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

    const onUpdate = (id, createDate, emotionId, content) => {
        dispatch(
            {
                type:"UPDATE",
                data: {
                    id,
                    createDate,
                    emotionId,
                    content,
                }
            }
        )
    }
  return (
      <>
          <button onClick={() => {
              onCreate(new Date().getTime(), 1, "Hello")
          }}
          >일기 추가 테스트
          </button>

          <button onClick={() => {
              onUpdate(1, new Date().getTime(), 3, "수정된 일기입니다.")
          }}>
              일기 수정 테스트
          </button>

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
