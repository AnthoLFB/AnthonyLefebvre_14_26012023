//React
import React from 'react';

function Error({code, message})
{
    return (
        <React.Fragment>
            <section>
                <h1>Oops</h1>
                <p>It seems that an error has occurred...</p>
                <p>{code} - {message}</p>
            </section>
        </React.Fragment>
    );
}

export default Error;
