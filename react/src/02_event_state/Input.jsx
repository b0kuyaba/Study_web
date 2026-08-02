import { useState } from "react";

const Input = () => {
  const [text, setText] = useState("");
  const handleOnChange = e => {
    console.log(e.target.value);
  };

  return (
    <div>
      <textarea value={text} onChange={handleOnChange} />
    </div>
  );
};

export default Input;
