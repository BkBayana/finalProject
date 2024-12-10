import '../style/Header.css';
import logo from '../assets/attendenceLogo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [rotated, setRotated] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogoClick = () => {
        setRotated(true);
        setTimeout(() => {
            setRotated(false);
        }, 3000);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="header__container">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Logo"
                        className={`logo ${rotated ? 'rotate' : ''}`}
                        onClick={handleLogoClick}
                    />
                </Link>
                <div className="burger" onClick={toggleMenu}>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                </div>
                <ul className={`header__menu ${menuOpen ? 'open' : ''}`}>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>MAIN</Link></li>
                    <li><Link to="/attendance" onClick={() => setMenuOpen(false)}>ATTENDANCE</Link></li>
                    <li><Link to="/contacts" onClick={() => setMenuOpen(false)}>CONTACT</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
