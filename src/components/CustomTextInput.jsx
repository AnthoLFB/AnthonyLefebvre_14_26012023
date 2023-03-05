//CSS
import '../styles/components/CustomInput.css';

function CustomTextInput({title, type, labelId, isRequired, constraints, setErrorCount})
{


    let input = isRequired ? <input className="field-container__input" type={type} id={labelId} required/> : <input className="field-container__input" type={type} id={labelId}/>;

    return (
        <div className="field-container">
            <label className="field-container__label" htmlFor={labelId}>{title}</label>
            {input}
        </div>
    )
}

export default CustomTextInput;