import { useEffect } from 'react'
import './cards.css'

const Cards = ({ title, price, imgList, list, img }) => {

    return (
        <div className='t_card'>
            <h4>{title}</h4>
            <p className='t_price'>{price}</p>
            <div className='t_img'>
                {imgList.map((img, i) => {
                    return <img key={i} src={img} />
                })}
            </div>
            <ul>
                {list.map((list, i) => {
                    return <li
                        key={i}
                        className='lists'>{list}
                    </li>
                })}
            </ul>
            <img className='t_img--down' src={img} alt="тут изображение" />
        </div>
    )
}

export default Cards