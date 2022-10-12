import play from '../../img/8_style/google.png'
import huawei from '../../img/8_style/heawei.png'
import apple from '../../img/8_style/store.png'
import send from '../../img/12_tarrifs/send.png'
import clock from '../../img/12_tarrifs/clock.png'

export const card_content = [
    {
        title: '«Легче легкого»',
        price: "0 р./м.",
        imgList: [play],
        img: send,
        list: [
            `Комиссия с продаж за
            пользование платформой Флет
             7%`,
            `Публикация мобильного
             приложения «Клиент» в Google
             play (для Android)`
        ],

    },
    {
        title: '«С нами надолго»',
        price: "1 800 р./м.",
        imgList: [apple, play, huawei],
        img: clock,
        list: [
            `Комиссия с продаж за
            пользование платформой
            Флет  1%`,
            `Публикация мобильного
            приложения «Клиент» в Google
            play, AppGallery (для Android) и
            App Store (для ios)`
        ]
    },
]