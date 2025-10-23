import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { minusOne, plusOne } from "./redux/modules/counter";

const App = () => {
  const value = useSelector((state) => {
    return state.counter.number;
  });

  console.log(number);

  const dispatch = useDispatch();
  const [number, setNumber] = useState(0)

  const onChangeHandler = (e) => {
    setNumver(+e.target.value)
  }

  return (
    <div>
      {/* {number} */}
      <div>{value}</div>
      <input type="number" onClick={onChangeHandler} value={number}/>
      <button
        onClick={() => {
          dispatch(addNumber(number));
        }}
      >
        +1
      </button>

      <button
        onClick={() => {
          dispatch(removeNumber(number));
        }}
      >
        -1
      </button>
    </div>
  );
};

export default App;