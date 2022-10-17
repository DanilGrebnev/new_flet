import './form.css'
import BtnGreen from '../../elements/BtnGreen/BtnGreen'
import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import Send from './sendForm'

const Form = observer(_ => {

    const { name, phone, mail, setName, setPhone, setMail, send } = Send

    return (
        <section id="form" >
            <h4>
                И после этого вы все еще думаете? Пора бы действовать!
            </h4>
            <h2>
                Выводите свой бизнес на новый уровень!
                Присоединяйтесь!
            </h2>
            <form action="#" method="post">
                <section id="inp_wrap">
                    <div>
                        <p>Имя</p>
                        <input value={name} onChange={setName} type="text" />
                    </div>
                    <div>
                        <p>Телефон</p>
                        <input value={phone} onChange={setPhone} type="number" />
                    </div>
                    <div>
                        <p>E-mail</p>
                        <input value={mail} onChange={setMail} type="email" />
                    </div>
                </section>
                <div id="f_submit">
                    <p className='font_20-10'>
                        Нажимая кнопку Отправить заявку, Вы даете согласие
                        на получение сервисных и рекламных сообщений о Программном
                        обеспечении Оператора и продуктах/услугах его Партнеров,
                        согласие на <span>обработку персональных данных</span> и соглашаетесь <span>с
                            политикой обработки персональных данных</span>
                    </p>
                    <BtnGreen submit={send} />
                </div>
            </form>
        </section >
    )
})

export default Form