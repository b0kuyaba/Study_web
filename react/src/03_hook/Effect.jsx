import Viewer from "./component/Viewer";
import Controller from "./component/Controller";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const onIncrease = () => {
    setCount(count + 1);
  };
  const onDecrease = () => {
    setCount(count - 1);
  };
  useEffect(() => {
    console.log("count 업데이트: ", count);
  }, [count]);

  return (
    <div className="App">
      <h1>Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onIncrease={onIncrease} onDecrease={onDecrease} />
      </section>
    </div>
  );
}
export default App;
