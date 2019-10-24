const todoReducer = (state= [], action) => { 
    
    switch(action.type){
        case "NO_ACTION":
            console.log('called');
            return state;
            //break;
        
        case "ADD_TODO":
                console.log('filter');
                //const todo = action.todo;
                //let's get lastID of the todo array of state
                const {description,status,createdAt} = action;
                const todo = {status, description, createdAt}
                // I can just say that 
                //const todo = action
                // And I will be right...
                const lastId = state.length;
                todo.id = lastId + 1;
                return [...state, todo];
                //const todos =  state.todos;
                //todos.push(todo); 
                // return  { ...state, todos};
                //return {todos};  
        case "REMOVE_TODO":
            console.log(state);
            console.log(action.id);
            return state.filter((todo)=> todo.id !== action.id);
            //return {todos: state.todos.filter((todo)=> todo.id !== action.id) };       
        case "EDIT_TODO":
            return state.map((todo)=>{
                if(todo.id ===action.id){
                    return({
                        ...todo, ...action.update
                    })
                    
                }else{
                    return todo;
                }
                
            }); 
        case "MARK_COMPLETE":
            return state.map((todo)=>{
                if(todo.id ===action.id){
                    return ({...todo , status: true});
                }else{
                    return todo;
                }
            });       
        default:
            return state;
    }

};

export default todoReducer;