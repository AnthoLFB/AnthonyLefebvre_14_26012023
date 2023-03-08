//Data
import employees from '../assets/data/employees.json';

//Init
const initialState = {
    employeeList: employees,
}

//Actions
const ADD_EMPLOYEE_TO_LIST = "addEmployeeToList";

//Action Creator
export function createNewEmployee(store, newEmployee)
{   
    try 
    {
        store.dispatch({type: ADD_EMPLOYEE_TO_LIST, payload: newEmployee});
    } 
    catch (error) 
    {
        console.log(error)
    }
}

//Reducer
export default function employeeReducer(state = initialState, action)
{
    switch(action.type)
    {
        case ADD_EMPLOYEE_TO_LIST:
        {
            return {
                ...state,
                employeeList: [...state.employeeList, action.payload]
            }
        }
        
        default: return state;
    }
}