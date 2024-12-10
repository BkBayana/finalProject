import '../style/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer className='footer'>
            <div className="footer__container">
                <div className="footer__container__block">
                    <h1 className="footer__container__block__title">© 2024 My Website. All rights reserved.</h1>
                    <div className="footer__container__block__link">
                        <Link to='#' className='footer__container__block__link__style'>GitHub</Link>
                        <Link to='#' className='footer__container__block__link__style'>Linkedin</Link>
                        <Link to='#' className='footer__container__block__link__style'>Email</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer