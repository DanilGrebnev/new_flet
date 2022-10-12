import './wish.css'
import '../../elements/card/card.css'
import content from './card_content'
import Card from '../../elements/card/card'

const Wish = _ => {

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
            {content.map((el, i) => <Card
                key={i}
                id={"w_card-" + (i + 1)}
                cls1="font_36"
                img={el.img}
                title={el.title}
                desc={el.desc}
            />)}
        </section>
    )
}

export default Wish