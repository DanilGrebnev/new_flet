import './store.css'
import phone from '../../img/10_store/phone.png'
import BigCard from '../../elements/bigCard/bigCard'
import box from '../../img/10_store/box.png'
import { card_list } from './card_list.js'

const Store = _ => {

    return (
        <section id="store" className="container">
            <img src={box} id="st_box" />
            <h1 className='font_80'>Приложение «Склад»</h1>
            <BigCard cls="font_20" img={phone} list={card_list} />
        </section>
    )
}

export default Store
