import heart from '../../../images/3_wish/heart-tick.png'
import reserve from '../../../images/3_wish/reserve.png'
import clock from '../../../images/3_wish/clock.png'

export const state = [
    {
        img: heart,
        title: "комфорт",
        desc: `клиент хочет найти
        нужный ему товар без
        нервов`,
        style: {
            top: "88px",
            left: "0",
        },
    },
    {
        img: reserve,
        title: "скорость",
        desc: `клиент хочет
        подобрать и купить
        в несколько кликов`,
        style: {
            bottom: "0",
            left: "450px"
        },
    },
    {
        img: clock,
        title: "сервис",
        desc: `клиент хочет
        оплачивать, заказы,
        получать скидки и
        бонусы`,
        style: {
            right: "0",
            bottom: "120px"
        },
    },
]