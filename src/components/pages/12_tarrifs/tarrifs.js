import './tarrifs.css'
import { card_content } from './card_content'
import Card from '../12_tarrifs/cards/cards'

const Tarrifs = _ => {
    return (
        <section id="tarrifs" className='container'>
            <h1>Тарифные планы</h1>
            <div id="t_wrapper">
                {card_content.map(el => {
                    return <Card
                        title={el.title}
                        imgList={el.imgList}
                        price={el.price}
                        list={el.list}
                    />
                })}
            </div>
        </section>
    )
}

export default Tarrifs