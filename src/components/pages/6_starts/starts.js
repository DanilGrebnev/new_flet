import "./starts.css"
import folder from '../../img/6_starts/folder.png'
import video from '../../img/6_starts/video.svg'

const Starts = _ => {

    const style = {
        backgroundImage: `url(${video})`
    }

    return (
        <section id="starts" >
            <div style={style} id="s_img" />
            <div id="s_content">
                <h1 className="font_80">Как начать работать с Флет</h1>
                <p className="h1_sub font_24">Посмотрите короткие видео инструкции о работе системы.
                    О том, как пройти  регистрацию, ввести данные,
                    заполнить товары и многое другое
                </p>
                <a>
                    <img id="folder" src={folder} />
                    <p>Смотреть инструкции</p>
                </a>
            </div>
        </section>
    )
}

export default Starts