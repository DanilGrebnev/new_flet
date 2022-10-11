import './bigCard.css'

const BigCard = ({ img, list, bg_img }) => {
    return (
        <div className="big_card">
            <ul>
                {list.map(list => <li>
                    {list}
                </li>)}
            </ul>
            <img className='big_card__img' src={img} />
        </div>
    )
}
export default BigCard