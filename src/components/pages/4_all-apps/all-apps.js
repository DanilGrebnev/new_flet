import BtnGreen from '../../elements/BtnGreen/BtnGreen'
import './all-apps.css'
import img from '../../images/4_all-apps/phone.png'

const AllApps = _ => {

    const style = {
        backgroundImage: `url(${img})`
    }

    return (
        <section id="all-apps" className='container'>
            <h1>Мобильные приложения,
                объединенные в единую экосистему
            </h1>
            <p className='h1_sub'>
                Сразу три приложения, автоматизируют работу любого бизнес-процесса
            </p>
            <BtnGreen />
            <div style={style} />
        </section>
    )
}

export default AllApps