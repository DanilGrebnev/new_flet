import './slider.css'
import { observer } from 'mobx-react-lite'
import store from './store'
import { useEffect, useRef, useState } from 'react'
import arrow from '../../img/slider/arrow.png'

const Slider = observer(({ card, amount }) => {
    //Процент смещения
    const [translateX, setTranslateX] = useState(0)
    //Счётчик перелистнутых слайдов
    const [count, setCount] = useState(0)

    //Подсчитывает процент, на который должно произойти смещение
    const step = _ => 100 / amount

    const next = _ => {
        setCount(p => p + 1)
        if (count === amount) {
            setCount(0)
            return setTranslateX(prev => prev = 0)
        }
        setTranslateX(prev => prev -= step())

        console.log(count)
    }

    const prev = _ => {
        setCount(p => p - 1)
        if (count === -1) {
            count = (amount - 1)
            return translateX = -66
        }
        setTranslateX(prev => prev += step())
    }

    // // amount - количество слайдов
    // const { next, prev, translateX, getCounertSlides } = store

    // const wrapper = useRef(0)

    // useEffect(() => {
    //     getCounertSlides(amount)
    // }, [])

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