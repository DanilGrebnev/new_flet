import './ecosystem.css'
import ok from '../../img/7_ecosystem/ok.png'
import { card } from './card'
import Card from './card'

const Ecosystem = _ => {

    const style = {
        bakgroundImage: `url(${ok})`
    }

    return (
        <section id="eco" className='container'>
            <h1>Приложения, входящие в экосистему</h1>
            <p className='h1_sub'>
                Мобильные приложения, позволяющие максимально автоматизировать все основные бизнес-процессы
            </p>
            <div id="e_wrapper">
                {card.map((el, i) => <Card
                    key={i}
                    img={el.img}
                    title={el.title}
                    desc={el.desc}
                />)}
                <img src={ok} id="e_ok" />
            </div>
        </section>
    )
}

export default Ecosystem