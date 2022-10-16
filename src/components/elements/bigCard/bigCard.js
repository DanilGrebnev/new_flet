import './bigCard.css'

const BigCard = ({ img, list, cls, title }) => {
    return (
        <div className="big_card">
            <h1 className='font_80-20'>{title}</h1>
            <ul>
                {list.map((list, i) => {
                    return <li
                        key={i}
                        className={`lists ${cls}`}>
                        {list}
                    </li>
                })}
            </ul>
            <img className='big_card__img' src={img} />
        </div>
    )
}
export default BigCard