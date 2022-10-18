import t from './img/telegram.png'
import v from './img/vk.png'
import w from './img/whatsapp.png'
import ok from './img/ok.png'
import './messegerIcons.css'
const MessegerIcons = _ => {

    const telegram = ""
    const vk = "https://vk.com/grilan"
    const whatsap = ""
    const odn = "https://ok.ru/profile/579105570700"

    return (
        <>
            <a className='mess_link' href={telegram}><img src={t} /></a>
            <a className='mess_link' href={vk}><img src={v} /></a>
            <a className='mess_link' href={"#"}><img src={w} /></a>
            <a className='mess_link' href={odn}><img src={ok} /></a>

        </>
    )
}

export default MessegerIcons