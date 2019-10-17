// import React from 'react';
// import ReactDom from 'react-dom';
// import Store from './component/Store';
// //import Form from './components/Form';

// import {connect} from 'react-redux';

// const store = connect((state= {todos:[], visibleFilter: 'all'}) => { 
// return state;
// });

// console.log(store.getState());

// //ReactDom.render(<Store/>, document.getElementById('root') );

//export default MyStore;

import {createStore, combineReducers} from 'redux';


const todoReducer = (state= [], action) => { 
    
    switch(action.type){
        case "NO_ACTION":
            console.log('called');
            return state;
            //break;
        
        case "ADD_TODO":
                //console.log('filter');
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
const defaultFilterState = {
    display: 'all',
    text: '',
    startDate: 0,
    endDate: 0,
};

const filterReducer = (state= defaultFilterState, action) => {
    const {filterName= '', filter='', display, startDate, endDate,text} = action;
    switch(action.type){
        case "FILTER_INCOMPLETE":
            console.log('filter');
            return {...state, display: filter};
            //return  action.filter;
        case "SET_FILTER":
            return {...state, display: filterName};
           // return  action.filterName;
        case "SEARCH_TEXT":
            return {...state, text }
        case "SET_DISPLAY":
            return {...state, display: display }; 
        case "SET_START_DATE":
                return {...state, startDate};
        case "SET_END_DATE":
                return {...state, endDate};                 
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({todos: todoReducer, filter: filterReducer})
    );
//const  consoleToLog = ()=>{console.log('hi'};
//rerenders store when there is a change
const unSubscribe = store.subscribe(()=>{
    //console.log(store.getState())
    const {todos, filter} = store.getState();
   const myFilteredTodo= filteredTodo(todos, filter);
    console.log(myFilteredTodo);
    console.log(store.getState());
});

// FILTERED ARRAY

const filteredTodo=(todos, {display, text, startDate, endDate })=>{
    return todos.filter((todo)=>{
        //let's get the ones that match the filter criteria
        //const displaymatch = typeof display !=="string" || true;
        let displaymatch = false;
        switch(display){
            case "all":
               displaymatch = true;
               break;
            case "incomplete":
                if(todo.status === false){
                    displaymatch = true;
                }
                break;
            case "completed" :
                if(todo.status === true){
                    displaymatch = true;
                }
                break;
            default:
                    displaymatch = false;
                 break;
                         
        }
        console.log(todo.description);
        console.log(todo.description.toLowerCase());
        console.log(text);
        const textMatch =  todo.description.toLowerCase().includes(text.toLowerCase());
        console.log(textMatch);
        const startDateMatch  = todo.createdAt >= startDate ;
        const endDateMatch = todo.createdAt <= endDate ;
        return displaymatch && textMatch && startDateMatch && endDateMatch
    });
}

//LET'S DISPATCH ACTIONS
const noAction = {type: 'NO_ACTION'};
//const addTodo = {type: 'ADD_TODO', content: }
store.dispatch(noAction);
//add todo item
//const todo = {status:false, description: 'wash clothes'};
//const addTodo = {type: "ADD_TODO", todo};
const addTodo =({description, createdAt})=>({type:'ADD_TODO', status: false, description, createdAt});
const removeTodo = (id) => ({type: 'REMOVE_TODO', id});
const editTodo = (id, update) =>({type: 'EDIT_TODO', update, id});
const markComplete = (id) =>({type: 'MARK_COMPLETE', id});
const searchText =(text) =>({type: 'SEARCH_TEXT', text })
const changeDisplay = (display) =>({type: 'SET_DISPLAY', display});
const setStartDate = (startDate) => ({type: 'SET_START_DATE', startDate});
const setEndDate = (endDate) => ({type: 'SET_END_DATE', endDate});

store.dispatch(addTodo({description:'eat', createdAt: 30}));
store.dispatch(addTodo({description:'wash', createdAt: 100}));
store.dispatch(removeTodo(2));
store.dispatch(searchText(''));
store.dispatch(changeDisplay('incomplete'));
store.dispatch(setStartDate(20));
store.dispatch(setEndDate(1000));

//we'll make the input update an obj
store.dispatch(editTodo(1,{description:'Finish up form', tag: 'important'}));
store.dispatch(markComplete(1));
store.dispatch(addTodo({description:'write code', createdAt: 500}));

unSubscribe();

//const sampleObj = {name: 'Michael', age: 10};
//console.log({...sampleObj});
//reset todos to empty array

//change visibilityfilter to incomplete
//const filterToIncomplete = {type: 'FILTER_INCOMPLETE', filter: 'incomplete'};
//console.log(store.getState());
