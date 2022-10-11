import './wish.css'
import './card/card.css'
import { state } from './card/state'
import Card from './card/card'

const Wish = _ => {

    return (
        <section id="wish" className='container'>
            <h1>
                Чего хочет ваш
                потребитель?
            </h1>
            <p className='h1_sub'>
                Его желания очень быстро и
                кардинально меняются
            </p>
            {state.map((el, i) => <Card
                key={i}
                id={i + 1}
                img={el.img}
                title={el.title}
                desc={el.desc}
            />)}
        </section>
    )
}

export default Wish