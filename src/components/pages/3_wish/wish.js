import './wish.css'
import '../../elements/card/card.css'
import content from './card_content'
import Card from '../../elements/card/card'
import Slider from '../../elements/slider/slider'

const Wish = _ => {

    const cards = content.map((el, i) => {
        return <div key={i}>
            <Card
                id={"w_card-" + (i + 1)}
                cls1="font_36"
                img={el.img}
                title={el.title}
                desc={el.desc}
            />
        </div>
    })

    return (
        <section id="wish" className='container'>
            <h1 className='font_80'>
                Чего хочет ваш
                потребитель?
            </h1>
            <p className='h1_sub'>
                Его желания очень быстро и
                кардинально меняются
            </p>
            <div id="card-wrapper">
                {cards}
            </div>
            <Slider card={cards} amount={content.length} />
        </section>
    )
}

export default Wish