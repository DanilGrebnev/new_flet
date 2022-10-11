import './bigCard.css'

const BigCard = ({ img, list }) => {
    return (
        <div className="big_card">
            <ul>
                {list.map((list, i) => {
                    return <li
                        key={i}
                        className='lists'>
                        {list}
                    </li>
                })}
            </ul>
            <img className='big_card__img' src={img} />
        </div>
    )
}
export default BigCard