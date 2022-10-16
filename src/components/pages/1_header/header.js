import './header.css'
import Login from '../../elements/login/login'
import Logo from '../../elements/logo/logo'
import Link from './h_link'

const Header = ({ setOpen }) => {

    return (
        <section id="header" className='container'>
            <div onClick={() => setOpen(p => !p)} id='burger'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
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