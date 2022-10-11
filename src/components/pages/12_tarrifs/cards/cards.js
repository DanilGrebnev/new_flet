import './cards.css'

const Cards = ({ title, price, imgList, list }) => {
    return (
        <div className='t_card'>
            <h4>{title}</h4>
            <p className='t_price'>{price}</p>
            <div className='t_img'>

                {imgList.map(img => {
                    return <img src={img} />
                })}

            </div>
            <ul>
                {list.map(list => {
                    <li className='lists'>{list}</li>
                })}
            </ul>
        </div>
    )
}

export default Cards