import './slider.css'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'

const Slider = ({ element, amount }) => {
    const [transform, setTransform] = useState(0)
    const [count, setCount] = useState(1)

    const n = 100 / amount

    const next = _ => {
        setCount(p => p + 1)
        setTransform(prev => prev - n)
        if (count > amount) {
            setTransform(prev => prev = 0)
            count = 0
        }
        console.clear()
        console.log("count: " + count)
        // console.log(amount)
    }

    const prev = _ => {
        setCount(p => p -= 1)
        console.log(count)

        setTransform(prev => prev + n)
    }

    return (
        <section className="slider">
            <div className="prev" onClick={prev}>prev</div>
            <div className="slider_wrapper">
                <div style={{ transform: `translateX(${transform}%)` }} className="slider_line">
                    {element}
                </div>
            </div>
            <div className="next" onClick={next}>next</div>
        </section>
    )

}

export default Slider