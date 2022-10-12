import './flet.css'
import content from './card_content'
import Card from '../../elements/card/card'

const Flet = _ => {
    return (
        <section id="flet" className='container'>
            <h1 className='font_80'>Флет это</h1>
            <p className='h1_sub font_24'>
                Широкие возможности, которые открываются
                перед вашим бизнесом, с началом работы с системой
            </p>
            <div id="f_wrapper">
                {content.map((el, i) => <Card
                    key={i}
                    img={el.img}
                    cls1={"font_24"}
                    cls2={"font_24"}
                    title={el.title}
                    desc={el.desc}
                />)}
            </div>
        </section>
    )
}

export default Flet