import p1 from '../../img/7_ecosystem/phone1.png'
import p2 from '../../img/7_ecosystem/phone2.png'
import p3 from '../../img/7_ecosystem/phone3.png'

export const card = [
    {
        img: p1,
        title: '«Клиент»',
        desc: `
        Визуализация вашего товара,
        возможность добавить товар в
        корзину, оплатить и заказать
        доставку
        `
    },
    {
        img: p2,
        title: '«Курьер»',
        desc: `Возможность составлять
        маршруты доставки,
        выбирать время,
        назначать курьера`
    },
    {
        img: p3,
        title: '«Склад»',
        desc: `Возможность вести складской
        учет, следить за остатками,
        формировать, комплектовать и
        передавать заказы курьерам`
    },
]

const Card = ({ img, title, desc, cls1, cls2 }) => {
    return (
        <div className='e_card'>
            <img src={img} />
            <h5 className={cls1}>{title}</h5>
            <p className={cls2}>
                {desc}
            </p>
        </div>
    )
}

export default Card