import { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

//CSS
import "../../styles/components/SearchBar.css";
import "../../styles/responsive/components/SearchBar.css";

function SearchBar({preGlobalFilteredRows, globalFilter, setGlobalFilter})
{
    const count = preGlobalFilteredRows.length
    const [value, setValue] = useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <div className='research'>
            <label className='research__label' htmlFor='globalResearch'>Search :</label>
            <input className='research__input' id="globalResearch" value={value || ""} onChange={e => {setValue(e.target.value); onChange(e.target.value); }} placeholder={`Search among - ${count} records...`}/>
        </div>
    )
}

export default SearchBar;
