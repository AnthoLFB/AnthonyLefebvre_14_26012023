//React
import React from 'react';

//CSS
import '../../styles/pages/Error.css'

function Error({code, message})
{
    return (
        <section className='error'>
            <h1 className='error__title'>Oops</h1>
            <p className='error__catchphrase'>It seems that an error has occurred...</p>
            <p className='error__information'>{code} - {message}</p>
        </section>
    );
}

export default Error;
