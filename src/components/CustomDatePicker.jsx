//CSS
import '../styles/components/CustomInput.css';

function CustomDatePicker({title, labelId, isRequired})
{
    let datePicker = isRequired ? <input required className="field-container__input" type="date" id={labelId} name={title}></input> : <input className="field-container__input" type="date" id={labelId} name={title}></input>;

    return (
            <div className="field-container">
                <label className="field-container__label" htmlFor={labelId}>{title}</label>
                {datePicker}
            </div>
    );
}

export default CustomDatePicker;