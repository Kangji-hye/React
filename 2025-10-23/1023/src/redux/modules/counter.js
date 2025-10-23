// Action Value
const ADD_NUMBER = "ADD_NUMBER";
const REMOVE_NUMBER = "REMOVE_NUMBER";

// Action Creator
export const plusOne = (payload) => {
  return { 
    type: ADD_NUMBER,
    payload: payload ,
  };
};

export const removeNumber = (payload) => {
  return { type: REMOVE_NUMBER,
    payload: payload,
   };
};

// 1.초기값 설정
const initState = {
  number: 0,
};

//2. 리듀서 (함수)
const counter = (state = initState, action) => {
  console.log("action =>", action);
  switch (action.type) {
    case "ADD_NUMBER":
      return {
        number: state.number + action.payload,
      };
    case "REMOVE_NUMBER":
      return {
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

//3. 리듀서 내보내기
export default counter;