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
        console.log(startDate);
        console.log(endDate);
        return displaymatch && textMatch && startDateMatch && endDateMatch
    })
}

export default filteredTodo;