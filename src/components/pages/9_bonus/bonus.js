import './bonus.css'
import phone from '../../img/9_bonus/phone.png'

const Bonus = _ => {
    return (
        <section id="bonus" className='container'>
            <div id="b_wrapper">
                < img src={phone} />
                <div id="b_content">
                    <h3>Бонусы и уведомления</h3>
                    <p>Автоматизированный процесс
                        управления бонусами и отправка
                        уведомлений потребителю
                        (стилизация под фирменный стиль
                        вашего бизнеса)
                    </p>
                    <h3>Товары</h3>
                    <p>
                        Возможность добавить
                        неограниченное количество
                        товарных единиц и адаптировать их,
                        визуально, под ваш фирменный стиль
                    </p>
                    <h4>Добавляйте группы и подгруппы товаров</h4>
                    <p>
                        Так вашему покупателю будет проще найти нужный товар, положить его в корзину и оплатить.
                        Весь процесс займет всего несколько минут. Все просто и интуитивно понятно
                    </p>
                    <h4>Подробное описание</h4>
                    <p>
                        Каждому товару можно дать подробное
                        описание. Это очень сильно поможет вашему
                        клиенту в процессе выбора и принятия
                        решения
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Bonus