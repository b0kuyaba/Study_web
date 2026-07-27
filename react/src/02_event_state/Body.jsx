import { useState } from "react";

const Body = () => {
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    setNumber(number + 1);
    console.log(number);
  };

  return (
    <div>
      <h2>{number}</h2>
      <button onClick={onIncrease}>+</button>
    </div>
  );
};

export default Body;
