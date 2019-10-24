import React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Icon, TextField } from '@material-ui/core';
//import {changeDisplay} from './actions/filter';
import SendIcon from '@material-ui/icons/Send';

import { withStyles } from "@material-ui/styles";
import { connect } from 'react-redux';
import { addTodo } from '../actions/todo';
import storeConfig from '../store/storeConfig';


    class AddTodo extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            description: '',
            createdAt: '',
        }
        this.handleDescriptionChange =this.handleDescriptionChange.bind(this);
        this.handleCreatedAtChange = this.handleCreatedAtChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        
    }
    handleClick(e){
        //alert('hi');
        const description = this.state.description;
        const createdAt = this.state.createdAt;
        this.props.handleSubmit({description,createdAt});
        this.setState({description: '', createdAt: ''})

    }
    
    handleDescriptionChange(e){
        //alert('change');
        const description = e.target.value;
        this.setState({...this.state, description});
        //console.log(e)
    }

    handleCreatedAtChange(e){
        //alert('change');
        const createdAt = e.target.value;
        this.setState({...this.state, createdAt});
        //console.log(e)
    }
    

    render() {
    
        const theState = this.state;
        console.log(theState);
    return (<div>
                {/* <MyTextField value={theState.description} onChange={this.handleDescriptionChange}  />
                <DateInput value={theState.createdAt} />
                <MyButton onClick= {this.handleClick} /> */}

                <TextField
                    id="standard-name"
                    label="Description"
                    //className={classes.textField}
                    value={this.state.description}
                    onChange={this.handleDescriptionChange}
                    margin="normal"
                    autoFocus
                    />

                <TextField
                    id="standard-name"
                    label="Time Created"
                    //className={classes.textField}
                    value={this.state.createdAt}
                    onChange={this.handleCreatedAtChange}
                    margin="normal"
                    //onClick={this.props.onClick}
                />

                <Button
                    variant="contained"
                    color="primary"
                    className={this.props.button}
                    onClick = {this.handleClick}
                    //endIcon={<SendIcon />}
                >
                    Add Todo <SendIcon/>
                </Button>


            </div>);
    }
}    



const MyForm = withStyles({
    root: {color:
    'black',
     },
     button: {
         color: 'black'
     }})((props) => (
          <AddTodo handleSubmit={(todo)=>{
              props.dispatch(addTodo(todo))}} />
      ));
export default connect()(MyForm);      
