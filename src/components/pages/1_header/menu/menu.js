import Link from '../h_link'
import Logo from '../../../elements/logo/logo'
import './menu.css'
import MessegerIcons from '../../../elements/messegerIcons/messegerIcons'

const Menu = ({ open, setOpen }) => {

    const openMenu = _ => {
        setOpen(p => !p)
        console.log(open)
    }

    return (
        <menu onClick={openMenu} className={open ? "active" : ""}>
            <Logo />
            <Link id="#flet" text="О системе" />
            <Link id="#starts" text="Инструкция" />
            <Link id="#tarrifs" text="Тарифы" />
            <Link id="#form" text="Оставить заявку" />
            <Link id="#form" text="Контакты" />
            <div>
                <MessegerIcons />
            </div>
        </menu>
    )
}

export default Menu