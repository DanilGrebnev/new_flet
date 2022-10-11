import BtnGreen from '../../elements/BtnGreen/BtnGreen.js'
import './system.css'
import phone from '../../img/2_system/phone.png'

const System = _ => {

    const style = {
        backgroundImage: `url(${phone})`
    }

    return (
        <section id="system" className='container'>
            <h1>
                Умная система
                онлайн-ритейла
            </h1>
            <p className='h1_sub'>
                Мобильные приложения, объединенные в
                единую экосистему
            </p>
            <BtnGreen />
            <div style={style} />
        </section>
    )
}

export default System