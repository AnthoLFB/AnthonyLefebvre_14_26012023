//React
import React from 'react';

//React-Router
import { Outlet, Link } from 'react-router-dom';

//Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';

//Css
import '../../styles/pages/Home.css';

function Home()
{
    return (
        <React.Fragment>
            <Header />

            <main className='main'>
                <Outlet />
            </main>

            <Footer />
        </React.Fragment>
    );
}

export default Home;
