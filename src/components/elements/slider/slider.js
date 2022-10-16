import './slider.css'
import { observer } from 'mobx-react-lite'
import { useEffect, useRef, useState } from 'react'
import arrow from '../../img/slider/arrow.png'

const Slider = observer(({ card, amount }) => {
    //Процент смещения
    const [translateX, setTranslateX] = useState(0)
    //Счётчик перелистнутых слайдов
    const [count, setCount] = useState(0)
    //Подсчитывает процент, на который должно произойти смещение
    const step = _ => 100 / amount
    //Следующий слайд
    const next = _ => {
        setCount(p => p + 1)
        if (count === (amount - 1)) {
            setCount(0)
            return setTranslateX(0)
        }

        setTranslateX(p => p -= step())
    }
    //Предыдущий слайд
    const prev = _ => {
        setCount(p => p - 1)
        if (count === -0) {
            setCount(amount - 1)
            return setTranslateX(-(step() * (amount - 1)))
        }
        setTranslateX(prev => prev + step())
    }

    return (
        <section className="slider">
            <div className="prev" onClick={prev}>
                <img src={arrow} />
            </div>
            <div className="slider_wrapper">
                <div
                    className="slider_line"
                    style={{ transform: `translateX(${translateX}%)` }} >
                    {card}
                </div>
            </div>
            <div className="next" onClick={_ => next(amount)}>
                <img src={arrow} />
            </div>
        </section >
    )

})

export default Slider