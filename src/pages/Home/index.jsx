//React
import React from 'react';

//React-Router
import { Outlet, Link } from 'react-router-dom';

function Home()
{
    return (
        <React.Fragment>
            <header>
                <p><Link to={`/`}>Create Employee</Link></p>
                <p><Link to={`/List`}>Employee List</Link></p>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <p>Footer</p>
            </footer>
        </React.Fragment>
    );
}

export default Home;
