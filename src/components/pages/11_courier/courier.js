import './courier.css'
import BigCard from '../../elements/bigCard/bigCard'
import phone from '../../img/11_courier/phone.png'
import truck from '../../img/11_courier/truck.svg'
import { list } from './list'

const Courier = _ => {
    return (
        <section id="courier" className='container'>
            <img src={truck} />
            <h1>Приложение «Курьер»</h1>
            <BigCard img={phone} list={list} />
        </section>
    )
}

export default Courier