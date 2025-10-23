// action value
// 해야할것 추가

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO ="REMOVE_TODO";
const CLICK_TODO ="CLICK_TODO";

// action creator
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload : payload,
    } 
};

export const removeTodo = (id) =>{
    return {
        type: REMOVE_TODO,
        id: id,
    };
};

export const clickTodo = (id) =>{
    return {
        type: CLICK_TODO,
        id:id,
    };
};


const initState = {
    todos:[], 
};

//디듀스 함수
const todos = (state = initState, action) =>{

    switch (action.type) {
        case ADD_TODO:
        return{
            ...state, 
            todos: [
                ...state.todos,
                {
                    id: Date.now(),
                    title: action.payload,
                    completed: false, 
                },
            ],
        };

        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo)=>todo.id !== action.id)
            };

        case CLICK_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo)
            };
    
        default:
            return state;
    }
};

export default todos;