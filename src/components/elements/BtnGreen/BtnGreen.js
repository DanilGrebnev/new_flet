import './BtnGreen.css'
import Send from '../../pages/13_form/sendForm'
import { observer } from 'mobx-react-lite'

const BtnGreen = observer(({ submit }) => {

    const { loading, ok, error, disabled } = Send

    const url = "https://www.market.flet.su/"

    const text = loading ? "отправка..." : ok ? "отправлено" : error ?
        "ошибка отправки" : "Отправить заявку"

    const content = submit ? text : "Начать работать"

    const className = `BtnGreen ${error ? "error" : ok ? "ok" : ""} font_24`

    return (
        <a href={url} disabled={disabled} onClick={submit} className={className}>
            {content}
        </a>
    )
})

export default BtnGreen