import {createStore, combineReducers} from 'redux';
import todoReducer from '../reducers/todoReducer';
import filterReducer from '../reducers/filterReducer';
import filteredTodo from '../selectors/filteredTodo';




//const  consoleToLog = ()=>{console.log('hi'};
//rerenders store when there is a change

export default ()=>{
    const store = createStore(
        combineReducers({todos: todoReducer, filter: filterReducer})
        );
        return store
}
//export default storeConfig();