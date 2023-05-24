import ACTIONS from './action.types.js'

const newTodo = (todo) => {
    return {
        id:Date.now(),
        todo:todo,
        complete:false
    }
}

const editTodo = (todos,action) => {
    todos.map(todo => {
        if(todo.id===action.payload.id){
            todo.todo = action.payload.todo
        }
    })
    return todos
}
const reducer = (todos,action) =>{
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return [...todos,newTodo(action.payload.todo)]

        case ACTIONS.DELETE_TODO:
            return todos.filter((todo)=>(
                todo.id !== action.payload.id
            ))
        
        case ACTIONS.EDIT_TODO:
            return editTodo(todos,action)

        default:
            return todos
    }

}

export default reducer