const defaultFilterState = {
    display: 'all',
    text: '',
    startDate: 0,
    endDate: 500000000,
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
export default filterReducer;