class Constraint
{
    constructor(inputToCheck, messageToDisplay)
    {
        this.inputToCheck = inputToCheck;
        this.messageToDisplay = messageToDisplay
    }

    checkErrorState()
    {
        // Get the div that contains the input 
        var parentNode = this.inputToCheck.parentNode;

        // Checking for an error message
        var elementExists = parentNode.getElementsByClassName("inputErrorMessage");
        var checkIfErrorMsgExist = document.body.contains(elementExists[0]);

        return checkIfErrorMsgExist
    }

    triggerAnError()
    {
        // Put a red border to the input
        this.inputToCheck.style.boxShadow = "inset 2px 2px 4px #e3a5a5, inset -2px -2px 4px #e3a5a5";

        // Get the div that contains the input 
        var parentNode = this.inputToCheck.parentNode;

        //Create error container
        const newElt = document.createElement("div");

        //Add a generic class
        newElt.classList.add("inputErrorMessage");

        //Add it in the DOM
        parentNode.appendChild(newElt); 

        //Display the message
        newElt.innerHTML = "<p>"+ this.messageToDisplay +"</p>";   
    }

    removeErrorBorder()
    {
        // Remove the red border to the input
        this.inputToCheck.style.boxShadow = "inset 2px 2px 4px #aeb5c0, inset -2px -2px 4px #d1d9e6";
    }

    // Function to manage what to do if there is an error or not 
    isValid()
    {        
        if(this.validate() == false)
        {
            if(this.checkErrorState()){return false}
            this.triggerAnError();
            return false;
        }
        else
        {
            this.removeErrorBorder();
            return true;
        }
    }
}

// Class to check if a field is empty
export class NotBlank extends Constraint
{
    validate()
    {
        if(this.inputToCheck.value.trim() == "")
        {
            return false;
        }
    }
}

//Class to check date format
export class CheckingDate extends Constraint
{
    validate()
    {
        const dateformat = /^\d{4}[\/\-](0[1-9]|1[012])[\/\-](0[1-9]|[12][0-9]|3[01])$/;

        if(!this.inputToCheck.value.match(dateformat) || isNaN(Date.parse(this.inputToCheck.value)))
        {
            return false
        }
    }
}

export class IsNumericValue extends Constraint
{
    validate()
    {      
        if(isNaN(parseInt(this.inputToCheck.value, 10)))
        {
            return false
        }
    }
}