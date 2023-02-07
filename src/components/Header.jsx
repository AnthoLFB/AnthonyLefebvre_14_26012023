//React Router
import {NavLink} from 'react-router-dom';

// Images
import logo from '../assets/images/home/wealth_health_logo';

// CSS
import "../styles/components/Header.css";
import "../styles/responsive/components/Header.css";

function Header()
{
    return (
        <header className='header'>
            
            <div className='header__container header__container__app-identity'>
                <img className="header__container__logo" src={logo} alt="Logo de l'entreprise Wealth Health"/>
                <p className='header__container__title'>HRnet</p>
            </div>        
        
            <div className='header__container header__container__navigation'>
                <nav className='header__container__navbar'>
                    <ul className='header__container__navbar__list'>
                        <li className='header__container__navbar__list__items'><NavLink className='header__container__navbar__list__items__links' to="/">Create Employee</NavLink></li>
                        <li className='header__container__navbar__list__items'><NavLink className='header__container__navbar__list__items__links' to="/List">Employee List</NavLink></li>
                    </ul>
                </nav>
            </div>
               
        </header>
    )
}

export default Header;