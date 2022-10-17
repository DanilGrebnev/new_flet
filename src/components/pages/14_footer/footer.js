import Login from '../../elements/login/login'
import Logo from '../../elements/logo/logo'
import './footer.css'
// import vk from '../../img/14_footer/vk.png'
// import telegram from '../../img/14_footer/telegram.png'
// import whatsap from '../../img/14_footer/whatsapp.png'
import phone from '../../img/14_footer/phone.png'
import location from '../../img/14_footer/location.png'
import email from '../../img/14_footer/email.png'
import Link from '../1_header/h_link'
import MessegerIcons from '../../elements/messegerIcons/messegerIcons'

const Footer = _ => {
    return (
        <section id="footer">
            <section id="footer_wrapper" className='container'>
                <div id='f_left'>
                    <Link cls="font_20" id="#flet" text="О системе" />
                    <Link cls="font_20" id="#starts" text="Инструкция" />
                    <Link cls="font_20" id="#tarrifs" text="Тарифы" />
                    <div className='messegers_icons'>
                        <MessegerIcons />
                    </div>
                </div>
                <div id='f_center'>
                    <a href="tel://+7 904 408 94 94">
                        <img src={phone} />
                        +7 904 408 94 94</a>
                    <a href="geo:48.755945,44.788347">
                        <img src={location} />
                        г. Волжский, ул. Ленина, 308Ж, оф. 14
                    </a>
                    <a href="mailto:mail@flet.su">
                        <img src={email} />
                        mail@flet.su
                    </a>
                    <Login />
                    <div className='messegers_icons'>
                        <MessegerIcons />
                    </div>
                </div>
                <div id="f_right">
                    <Logo />
                    <p className='font_15-8'>Copyrights 2022 © iVoлга</p>
                </div>
            </section>
        </section>
    )
}

export default Footer