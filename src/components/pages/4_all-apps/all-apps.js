import BtnGreen from '../../elements/BtnGreen/BtnGreen'
import './all-apps.css'
import img from '../../img/4_all-apps/phone.png'

const AllApps = _ => {

    const style = {
        backgroundImage: `url(${img})`
    }

    return (
        <section id="all-apps" className='container'>
            <h1 className='font_80'>
                Мобильные приложения,
                объединенные в единую экосистему
            </h1>
            <p className='h1_sub font_24'>
                Сразу три приложения, автоматизируют работу любого бизнес-процесса
            </p>
            <BtnGreen />
            <img src={img} />
        </section>
    )
}

export default AllApps