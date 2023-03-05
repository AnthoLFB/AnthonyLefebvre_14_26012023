
//Data
import employees from '../assets/data/employees.json';

//Init
const initialState = {
    employeeList: employees,
}

//Actions
const ADD_EMPLOYEE_TO_LIST = "addEmployeeToList";

//Action Creator
export function createNewEmployee(store, newEmployee, modalControls)
{   
    try 
    {
        store.dispatch({type: ADD_EMPLOYEE_TO_LIST, payload: newEmployee});
        modalControls.title("Employee created !")
        modalControls.message( newEmployee.firstName + ' ' + newEmployee.lastName + " has been successfully added to the list of employees.")
        modalControls.type("success")
        modalControls.status(true)
    } 
    catch (error) 
    {
        modalControls.title("Error !")
        modalControls.message(error)
        modalControls.type("error")
        modalControls.status(true)
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