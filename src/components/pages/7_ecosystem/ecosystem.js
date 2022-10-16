import './ecosystem.css'
import ok from '../../img/7_ecosystem/ok.png'
import { card } from './card'
import Card from './card'

const Ecosystem = _ => {

    return (
        <section id="eco" className='container'>
            <h1 className='font_80'>Приложения, входящие в экосистему</h1>
            <p className='h1_sub font_24'>
                Мобильные приложения, позволяющие максимально автоматизировать все основные бизнес-процессы
            </p>
            <div id="e_wrapper">
                <div>
                    {card.map((el, i) => <Card
                        key={i}
                        img={el.img}
                        cls1="font_24"
                        cls2="font_24"
                        title={el.title}
                        desc={el.desc}
                    />)}
                </div>
                <img src={ok} id="e_ok" />
            </div>
        </section>
    )
}

export default Ecosystem