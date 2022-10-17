const Link = ({ text, id, cls = "font_24" }) => {
    const url = 'https://market-api.flet.su/api/print/help'

    const href = text.toLowerCase() === "инструкция" ? url : id

    return (
        <a className={cls} href={href}>{text}</a>
    )
}

export default Link

