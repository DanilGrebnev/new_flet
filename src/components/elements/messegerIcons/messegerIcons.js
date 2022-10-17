import t from './img/telegram.png'
import v from './img/vk.png'
import w from './img/whatsapp.png'
import './messegerIcons.css'
const MessegerIcons = _ => {

    const tel = ""
    const vk = "https://vk.com/grilan"
    const whatsap = ""
    return (
        <>
            <a className='mess_link' href={tel}><img src={t} /></a>
            <a className='mess_link' href={vk}><img src={v} /></a>
            <a className='mess_link' href={"#"}><img src={w} /></a>
        </>
    )
}

export default MessegerIcons