import './style.css'
import phone from '../../img/8_style/phone.png'
import huawei from '../../img/8_style/heawei.png'
import apple from '../../img/8_style/store.png'
import gplay from '../../img/8_style/google.png'


const Style = _ => {
    return (
        <section id="style">
            <div id="st_wrapper">
                <div id="st_left">
                    <h3 className='font_36'>
                        Ваш узнаваемый стиль
                    </h3>
                    <p className='font_24'>
                        Добавьте свой логотип, изображения
                        товаров, фирменные цвета. Сделайте
                        приложение более узнаваемым.
                        Сделайте его своим
                    </p>
                    <div id="st_left__icons">
                        <img src={apple}></img>
                        <img src={gplay}></img>
                        <img src={huawei}></img>
                    </div>
                </div>
                <img src={phone} id="st_img" />
            </div>
        </section>
    )
}

export default Style