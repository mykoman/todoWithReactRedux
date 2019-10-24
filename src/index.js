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


import React from 'react';
import ReactDom from 'react-dom';
import storeConfig from './store/storeConfig';
import {addTodo} from './actions/todo';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Icon, TextField } from '@material-ui/core';
import {changeDisplay} from './actions/filter';
import SendIcon from '@material-ui/icons/Send';
import { withStyles } from '@material-ui/styles';
import MyTable from './component/table';
import MyTab from './component/MyTab';
import {Provider} from 'react-redux';
import filteredTodo from './selectors/filteredTodo';
import AddTodo from './component/AddTodo';


          



      

 const MyForm=  withStyles({
    })((props) => (
        <div>
           <AddTodo />
            <MyTab />
            <MyTable />

        </div>
          
      )) 


const store = storeConfig();
//const myFilteredTodo = filteredTodo(store.todos, store.filter);
store.subscribe(()=>{
    console.log(store.getState())
    //console.log(myFilteredTodo);
}
   
);
console.log(store.getState());
store.dispatch(changeDisplay('incomplete'));
store.dispatch(addTodo({description: 'write code', createdAt: 300}));
store.dispatch(addTodo({description:'eat', createdAt: 30}));

const jsx= (<Provider store={store}>
    <MyForm />
</Provider>);

ReactDom.render(jsx, document.getElementById('root') );