import logo from './logo.svg';
import './App.css';
import reducer from './util/reducer';
import ACTIONS from './util/action.types.js'
import { useReducer, useState } from 'react';
import Todo from './component/Todo'

function App() {
  const [newTodo,setNewTodo] = useState('')
  const [todos,dispatch] = useReducer(reducer,[])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({type:ACTIONS.ADD_TODO,
              payload:{todo:newTodo}
    })
    setNewTodo('')
  }

  return (
    <div className='flex flex-col  items-center p-10 w-screen h-screen bg-slate-400'  >
      <form>
        <input type='text' value={newTodo} onChange={e=>setNewTodo(e.target.value)} ></input>
        <button onClick={handleSubmit} >ADD</button>
      </form>
     {
      todos.map((todo,key) => 
        <Todo key={key} todo={todo} dispatch={dispatch} />
      )
      // todos.map((todo,key) => <div key={key} >{todo.todo}</div>)
     }
      
    </div>

  );
}

export default App;
