import React, {useState, useEffect} from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
const [click,setClick] = useState(false);
const [button, setButton] = useState(true);

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

const showButton = () => {
    if(window.innerWidth <= 960){
        setButton(false);
    } else {
        setButton(true);
    }
};

useEffect(() => {
    showButton();
}, []);

window.addEventListener('resize', showButton);

    return (
        <>
         <nav className="navbar">
             <div className="navbar-container">
                <Link to="/" className='navbar-logo' onCLick={closeMobileMenu}>
                    Agência Travel
                    <i class='fab fa-typo3' />
                </Link>

                <div className='menu-icon' onCLick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onCLick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link 
                        to='/services'
                        className='nav-links'
                        onClick={closeMobileMenu}
                        >
                            Serviços
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link
                        to='/products'
                        className='nav-links'
                        onClick={closeMobileMenu}>
                            Produtos
                        </Link>
                    </li>

                    <li>
                        <Link
                        to='/sign-up'
                        className='nav-links-mobile'
                        onClick={closeMobileMenu}
                        >
                            Faço o Cadastro
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Faça o cadastro</Button>}
             </div>
         </nav>
        </>
    );
}

export default Navbar;
