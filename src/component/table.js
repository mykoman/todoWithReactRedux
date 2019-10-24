import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import filteredTodo from '../selectors/filteredTodo';




const MyTable = withStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  })((props) => (
    <Paper className={props.root}>
      <Table className={props.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>CreatedAt</TableCell>
            <TableCell>Action</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
            {props.todos.map((todo)=>(
                <TableRow key={todo.id}>
                    <TableCell>{todo.id}</TableCell>
                    <TableCell>
                        {todo.description}
                    </TableCell>
                    
                    <TableCell>{todo.status}</TableCell>
                    <TableCell>{todo.createdAt}</TableCell>
                    <TableCell><Button>Toggle</Button></TableCell>
              
                </TableRow>
            ))}
        
        </TableBody>
      </Table>
    </Paper>
      
  )) 

  

  const mapStateToProps = (state)=>{
    const theFilter =filteredTodo(state.todos, state.filter)
    console.log(theFilter);
    console.log(state.todos);
    console.log(state.filter);
    console.log(state);
    return {
        todos: theFilter
    }
  };

  export default connect(mapStateToProps)(MyTable);

  //export default connectedTable;




