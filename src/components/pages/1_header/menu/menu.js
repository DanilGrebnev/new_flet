import Link from '../h_link'
import './menu.css'

const Menu = _ => {
    return (
        <menu>
            <Link id="#flet" text="О системе" />
            <Link id="#starts" text="Инструкция" />
            <Link id="#tarrifs" text="Тарифы" />
        </menu>
    )
}

export default Menu