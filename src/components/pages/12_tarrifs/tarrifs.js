import './tarrifs.css'
import { card_content } from './card_content'
import Card from '../12_tarrifs/cards/cards'
import Slider from '../../elements/slider/slider'

const Tarrifs = _ => {

    const cards = card_content.map((el, i) => {
        return <Card
            key={i}
            img={el.img}
            title={el.title}
            imgList={el.imgList}
            price={el.price}
            list={el.list}
        />
    })


    return (
        <section id="tarrifs" className='container'>
            <h1 className='font_80'>Тарифные планы</h1>
            <div id="t_wrapper">
                {cards}
            </div>
            <Slider card={cards} amount={card_content.length} />
        </section>
    )
}

export default Tarrifs