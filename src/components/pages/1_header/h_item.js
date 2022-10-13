const Link = ({ text, id, cls = "font_24" }) => {
    return (
        <a className={cls} href={id}>{text}</a>
    )
}

export default Link

