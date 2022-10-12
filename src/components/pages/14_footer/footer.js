import Login from '../../elements/login/login'
import Logo from '../../elements/logo/logo'
import './footer.css'
import vk from '../../img/14_footer/vk.png'
import telegram from '../../img/14_footer/telegram.png'
import whatsap from '../../img/14_footer/whatsapp.png'
import phone from '../../img/14_footer/phone.png'
import location from '../../img/14_footer/location.png'
import email from '../../img/14_footer/email.png'

const Footer = _ => {
    return (
        <section id="footer">
            <section id="footer_wrapper" className='container'>
                <div id='f_left'>
                    <a>
                        О системе
                    </a>
                    <a>
                        Инструкции
                    </a>
                    <a>Тарифы</a>
                    <div>
                        <img src={telegram} />
                        <img src={vk} />
                        <img src={whatsap} />
                    </div>
                </div>
                <div id='f_center'>
                    <a>
                        <img src={phone} />
                        +7 904 408 94 94</a>
                    <a>
                        <img src={location} />
                        г. Волжский, ул. Ленина, 308Ж, оф. 14
                    </a>
                    <a>
                        <img src={email} />
                        mail@flet.su
                    </a>
                    <Login />
                </div>
                <div id="f_right">
                    <Logo />
                    <p>Copyrights 2022 © iVoлга</p>
                </div>
            </section>
        </section>
    )
}

export default Footer