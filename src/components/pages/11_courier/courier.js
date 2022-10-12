import './courier.css'
import BigCard from '../../elements/bigCard/bigCard'
import phone from '../../img/11_courier/phone.png'
import truck from '../../img/11_courier/truck.svg'
import { list } from './list'

const Courier = _ => {
    return (
        <section id="courier" className='container'>
            <img src={truck} />
            <h1 className='font_80'>Приложение «Курьер»</h1>
            <BigCard cls="font_20" img={phone} list={list} />
        </section>
    )
}

export default Courier