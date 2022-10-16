import './flet.css'
import content from './card_content'
import Card from '../../elements/card/card'
import Slider from '../../elements/slider/slider'

const cards = content.map((el, i) => <div key={i}>
    <Card
        img={el.img}
        title={el.title}
        desc={el.desc}
    /></div>)

const Flet = _ => {
    return (
        <section id="flet" className='container'>
            <h1 className='font_80'>Флет это</h1>
            <p className='h1_sub font_24'>
                Широкие возможности, которые открываются
                перед вашим бизнесом, с началом работы с системой
            </p>
            <div id="f_wrapper">
                {cards}
            </div>
            <Slider card={cards} amount={content.length} />
        </section>
    )
}

export default Flet