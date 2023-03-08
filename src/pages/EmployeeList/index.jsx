//React
import React from 'react';
import EmployeesDataTable from '../../components/Table/EmployeesDataTable';


//Redux
import { useSelector } from 'react-redux';
import { employeeList } from '../../utils/selectors';

function EmployeeList()
{  

  const employees = useSelector(employeeList);

  return (
    <React.Fragment>
        <h1 className='page-title'>Current Employees</h1>
        <EmployeesDataTable employees={employees}/>
    </React.Fragment>
  );
}

export default EmployeeList;
