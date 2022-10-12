import './form.css'
import BtnGreen from '../../elements/BtnGreen/BtnGreen'

const Form = _ => {
    return (
        <section id="form">
            <h4>
                И после этого вы все еще думаете? Пора бы действовать!
            </h4>
            <h2>
                Выводите свой бизнес на новый уровень!
                Присоединяйтесь!
            </h2>
            <form action="#" method="post">
                <section id="">
                    <div>
                        <p>Имя</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>Телефон</p>
                        <input type="number" />
                    </div>
                    <div>
                        <p>E-mail</p>
                        <input type="email" />
                    </div>
                </section>
                <div id="f_submit">
                    <p>
                        Нажимая кнопку Отправить заявку, Вы даете согласие
                        на получение сервисных и рекламных сообщений о Программном
                        обеспечении Оператора и продуктах/услугах его Партнеров,
                        согласие на <a>обработку персональных данных</a> и соглашаетесь <a>с
                        политикой обработки персональных данных</a>
                    </p>
                    <BtnGreen />
                </div>
            </form>
        </section>
    )
}

export default Form