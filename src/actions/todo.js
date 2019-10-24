export const addTodo =({description, createdAt})=>({type:'ADD_TODO', status: false, description, createdAt});
export const removeTodo = (id) => ({type: 'REMOVE_TODO', id});
export const editTodo = (id, update) =>({type: 'EDIT_TODO', update, id});
export const markComplete = (id) =>({type: 'MARK_COMPLETE', id});