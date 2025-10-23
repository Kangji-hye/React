import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, clickTodo, removeTodo,  } from '../redux/modules/todo';

const TodoList = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const todos = useSelector((state) => {
        return state.todos.todos;
    });

    console.log("todos => ", todos);

    const changehandler = (e) => {
        setInput(e.target.value);
    };

    const addHandler = () => {
        dispatch(addTodo(input));
    };

    const removeHandler = (title) => {
        dispatch(removeTodo(title));
    };

    const clickHandler = (id) => {
        dispatch(clickTodo(id));
    };

  return (
    <div>
        <input type="text" onChange={changehandler} value={input} />
        <button onClick={addHandler}>추가</button>
        <ul>
            {todos.map((todo) => {
                    return(
                        <li key={todo.id}>
                            <span 
                                onClick={()=>clickHandler(todo.id)} 
                                style={{textDecoration: todo.completed ? 
                                    'line-through' : 'none', 
                                    cursor: 'pointer'}}>
                                {todo.title}
                            </span>
                            <button onClick={()=>removeHandler(todo.id)}>삭제</button>
                        </li>
                )
            })}
        </ul>
    </div>
  )
}

export default TodoList;