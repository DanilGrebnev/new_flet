import './header.css'
import logo from '../../img/1_header/logo.png'
import Login from '../../elements/login/login'
import Logo from '../../elements/logo/logo'


const Header = _ => {
    return (
        <section id="header" className='container'>
            <Logo />
            <div id="h_wrapper">
                <a className='font_24'>О системе</a>
                <a className='font_24'>Инструкция</a>
                <a className='font_24'>Тарифы</a>
                <Login />
            </div>
        </section>
    )
}

export default Header