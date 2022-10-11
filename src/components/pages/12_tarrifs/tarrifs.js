import { card_content } from './card_content'
import Card from '../12_tarrifs/cards/cards'

const Tarrifs = _ => {
    return (
        <section id="tarrifs">
            <h1>Тарифные планы</h1>
            <div id="t_wrapper">
                {card_content.map(el => {
                    return <Card
                        title={el.title}
                        imgList={el.imgList}
                        list={el.list}
                    />
                })}
            </div>
        </section>
    )
}

export default Tarrifs