import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



const TheTab=  withStyles({
    root: {
      flexGrow: 1,
    },
  })((props) => (
    <Paper className={props.root}>
      <Tabs
        value={props.value}
        onChange={props.onChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        <Tab label="Undone" />
        <Tab label="Completed" />
      </Tabs>
    </Paper>
      
  )) 

//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };


  class MyTab extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            value: 0,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event, newValue){
        //alert('hi');
        console.log(event);
        console.log(this.state);
        //const nextDrawerState = this.state.opendrawer ? false: true;
        this.setState({value: newValue});

    }
    
    render(){
      console.log(this.state)
      
        return (<TheTab onChange={this.handleChange} value={this.state.value}/>);
    }
    
}

  export default MyTab;