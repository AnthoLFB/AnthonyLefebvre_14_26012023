//react
import React from 'react';

//Modal
import {Modal} from 'anthony_lfb_modal_p14';

//React
import { useState } from 'react';

//Components
import CustomTextInput from "./CustomTextInput";
import CustomDatePicker from "./CustomDatePicker";
import CustomSelectInput from "./CustomSelectInput";

//Data
import states from '../assets/data/states.json';
import departments from '../assets/data/departments.json';

//Css
import '../styles/components/CreateEmployeeForm.css';

//Scripts
import { NotBlank, CheckingDate, IsNumericValue } from "../scripts/Constraint";


function CreateEmployeeForm()
{
    const [isOpen, setIsOpen] = useState(false);
    const [employeeIdentity, setEmployeeIdentity] = useState(null);

    return (
        <React.Fragment>
            <section className="create-employee">
                <form className='create-employee__form' id="createEmployeeForm" onSubmit={(e) => checkData(e, setIsOpen, setEmployeeIdentity)}>

                    <h2 className="create-employee__form__title">Employee's Information</h2>

                    <fieldset className="create-employee__form__fieldset">
                        <legend className="create-employee__form__fieldset__legend">Identity</legend>
                        <CustomTextInput title="First Name" type="text" labelId="firstname" isRequired={false} />
                        <CustomTextInput title="Last Name" type="text" labelId="lastname" isRequired={false} />
                        <CustomDatePicker title="Date of Birth" labelId="employeeBirthday" placeholder="Click to enter a date" isRequired={false} />
                    </fieldset>

                    <fieldset className="create-employee__form__fieldset">
                        <legend className="create-employee__form__fieldset__legend">Address</legend>
                        <CustomTextInput title="Street" type="text" labelId="street" isRequired={false} />
                        <CustomTextInput title="City" type="text" labelId="city" isRequired={false} />
                        <CustomSelectInput title="State" labelId="state" options={states} />
                        <CustomTextInput title="Zip Code" type="number" labelId="zipCode" isRequired={false} />
                    </fieldset>

                    <fieldset className="create-employee__form__fieldset">
                        <legend className="create-employee__form__fieldset__legend">Role</legend>
                        <CustomDatePicker title="Start Date" labelId="startDate" placeholder="Click to enter a date" isRequired={false} />
                        <CustomSelectInput title="Department" labelId="department" options={departments} />
                    </fieldset>

                    <input className="create-employee__form__button" type="submit" value="Save"/>
                </form>
            </section>

            <Modal isOpen={isOpen} setIsOpen={setIsOpen} isScrollable={true} type={"success"} iconToDisplay={null} title={"test"} message={employeeIdentity + " a été enregistré avec succès dans la liste des employés."}/>

            

        </React.Fragment>
    );
}

function checkData(e, displayModal, setEmployeeIdentity)
{
    e.preventDefault()

    //Error message to display
    const notBlankMessage = "This field must not be empty.";
    const checkingDateMessage = "Date format is not valid.";
    const isNumericValueMessage = "The value provided is not in numeric format."

    //Récupération des données
    const form = document.getElementById("createEmployeeForm");

    //Identity
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const birthdate = document.getElementById("employeeBirthday");

    //Address
    const street = document.getElementById("street");
    const city = document.getElementById("city");
    const state = document.getElementById("state");
    const zipCode = document.getElementById("zipCode");

    //Role
    const startDate = document.getElementById("startDate");
    const department = document.getElementById("department");

    let constraints = [
        
        //Identity
        new NotBlank(firstname, notBlankMessage),
        new NotBlank(lastname, notBlankMessage),
        new NotBlank(birthdate, notBlankMessage),
        new CheckingDate(birthdate, checkingDateMessage),

        //Address
        new NotBlank(street, notBlankMessage),
        new NotBlank(city, notBlankMessage),
        new NotBlank(state, notBlankMessage),
        new NotBlank(zipCode, notBlankMessage),
        new IsNumericValue(zipCode, isNumericValueMessage),

        //Role
        new NotBlank(startDate, notBlankMessage),
        new CheckingDate(birthdate, checkingDateMessage),
        new NotBlank(department, notBlankMessage)
    ]

    let errorCount = 0;
    removeErrors(form);

    constraints.forEach(constraint => {
        errorCount += constraint.isValid() ? 0 : 1
    });

    if(errorCount > 0)
    {
        return false
    }

    console.log("Ouverture de la modale de confirmation.");
    setEmployeeIdentity(firstname.value + " " + lastname.value);
    displayModal(true);
}

function removeErrors(containerToCheck)
{
    const errors = containerToCheck.querySelectorAll("div.inputErrorMessage");

    errors.forEach(error =>{
        error.parentNode.removeChild(error)
    });
}

export default CreateEmployeeForm;
