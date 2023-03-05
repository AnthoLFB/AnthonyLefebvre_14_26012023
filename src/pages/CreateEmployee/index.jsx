//React
import React from 'react';
import CreateEmployeeForm from '../../components/CreateEmployeeForm';

//css
import '../../styles/pages/CreateEmployee.css';

function CreateEmployee()
{
  return (
    <React.Fragment>
        <h1 className='page-title'>Create Employee</h1>
        <CreateEmployeeForm />
    </React.Fragment>
  );
}

export default CreateEmployee;
