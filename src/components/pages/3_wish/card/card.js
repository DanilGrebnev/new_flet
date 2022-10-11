import './card.css'

const Card = ({ img, title, desc, id, style }) => {
    //Позиционирование приходит из состояния
    
    return (
        <div style={{ ...style }} id={"w_card-" + id} className="w_card" >
            <img src={img} />
            <h4>{title} </h4>
            <p>{desc}</p>
        </div >
    )
}

export default Card