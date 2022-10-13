import './header.css'
import logo from '../../img/1_header/logo.png'
import Login from '../../elements/login/login'
import Logo from '../../elements/logo/logo'
import Link from './h_item'

const Header = _ => {
    return (
        <section id="header" className='container'>
            <Logo />
            <div id="h_wrapper">
                <Link id="#flet" text="О системе" />
                <Link id="#starts" text="Инструкция" />
                <Link id="#tarrifs" text="Тарифы" />
                <Login />
            </div>
        </section>
    )
}

export default Header