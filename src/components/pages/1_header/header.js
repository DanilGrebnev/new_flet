import './header.css'
import logo from '../../images/1_header/logo.png'
import login from '../../images/1_header/login.svg'

const Header = _ => {
    return (
        <section id="header" className='container'>
            <img id="h_logo" src={logo} />
            <div id="h_wrapper">
                <a>О системе</a>
                <a>Инструкция</a>
                <a>Тарифы</a>
                <a>
                    <p>Вход/Регистрация</p>
                    <img id="h_login" src={login} />
                </a>
            </div>
        </section>
    )
}

export default Header