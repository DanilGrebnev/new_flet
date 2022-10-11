import './card.css'

const Card = ({ img, title, desc, id, style }) => {

    return (
        <div style={{ ...style }} id={id} className={`card`} >
            <img src={img} />
            <h4>{title} </h4>
            <p>{desc}</p>
        </div >
    )
}

export default Card