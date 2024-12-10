import '../style/Contacts.css';
import phone from '../assets/phone.png';
import email from '../assets/email1.png';
const Contacts = () =>{
    return(
        <section className='contact__page'>
            <div className="contact__page__container container">
                <div className="contact__page__container__wrapper">
                    <div className="contact__page__container__wrapper__block">
                    <h1 className="contact__page__container__block__title">
                        Get in touch
                    </h1>
                    <div className="contact__page__container__block__get">
                        <img src={phone} className="iconPhoto" />
                        <div className="contact__page__container__block__get__card">
                            <h1 className="contact__page__container__block__get__title">Phone number</h1>
                            <h1 className="contact__page__container__block__get__subtitle">0559345867</h1>
                        </div>
                    </div>
                    <div className="contact__page__container__block__get">
                        <img src={email}  className="iconPhoto" />
                        <div className="contact__page__container__block__get__card">
                            <h1 className="contact__page__container__block__get__title">Email</h1>
                            <h1 className="contact__page__container__block__get__subtitle">bayanabakytbek@gmail.com</h1>
                        </div>
                    </div>
                    </div>
                    <div className="contact__page__container__wrapper__form">
                        <h1 className="contact__page__container__wrapper__form__title">
                            Send a message
                        </h1>
                        <form action="send.php" method="post" className='sendblok'>
                            <input type="text" name="fio" placeholder="Укажите ФИО" className='sendblok__input'></input>
                            <input type="text" name="email" placeholder="Укажите e-mail" className='sendblok__input'></input>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contacts