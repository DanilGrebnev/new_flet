import Link from '../h_link'
import './menu.css'

const Menu = ({ open, setOpen }) => {

    const openMenu = _ => {
        setOpen(p => !p)
        console.log(open)
    }

    return (
        <menu onClick={openMenu} className={open ? "active" : ""}>
            <Link id="#flet" text="О системе" />
            <Link id="#starts" text="Инструкция" />
            <Link id="#tarrifs" text="Тарифы" />
        </menu>
    )
}

export default Menu