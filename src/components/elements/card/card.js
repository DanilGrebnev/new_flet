import './card.css'

const Card = ({ img, title, desc, id, style, cls1, cls2 }) => {

    return (
        <div style={{ ...style }} id={id} className={`card`} >
            <img src={img} />
            <h4 className={cls1}>{title} </h4>
            <p className={cls2}>{desc}</p>
        </div >
    )
}

export default Card