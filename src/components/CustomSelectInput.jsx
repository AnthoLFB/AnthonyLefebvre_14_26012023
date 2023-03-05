//CSS
import '../styles/components/CustomInput.css';

function CustomSelectInput({title, labelId, options})
{
    return (
        <div className="field-container">
            <label className="field-container__label" htmlFor={labelId}>{title}</label>
            <select className="field-container__input" name={title} id={labelId}>
                {options.map(option => <option key={option.label} value={option.value}>{option.label}</option>)}
            </select>
        </div>
    )
}

export default CustomSelectInput;