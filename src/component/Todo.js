import { useState } from "react";
import ACTIONS from "../util/action.types";

const Todo = ({todo,dispatch}) => {
   
    const[newTodo,setNewTodo] = useState(todo.todo)
    const [editTodoFlag,setEditTodoFlag] = useState(false)

    const handleDelete = () =>{
        dispatch({type:ACTIONS.DELETE_TODO,payload:{id:todo.id}})
    }

    const handleEdit = (e) => {
        e.preventDefault()
        
       dispatch({type:ACTIONS.EDIT_TODO,
                 payload:{id:todo.id,
                           todo:newTodo          
                         }
                })
        setEditTodoFlag(false)
    }

    return(
      <div className="flex m-1  " >
        <h1 className=" p-2 " >
        {
            editTodoFlag === true ? <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} onBlur={handleEdit} /> : todo.todo
        }
        </h1>
        <button className="bg-red-500 px-2 py-0 mr-2 rounded-sm" 
                onClick={handleDelete}
        >Delete</button>

        <button className="bg-red-500 px-2 py-0 rounded-sm" 
        onClick={()=>setEditTodoFlag(true)}
        >Edit</button>
      </div>
  )
      
}

export default Todo