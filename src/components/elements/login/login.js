import './login.css'
import login from '../../img/1_header/login.svg'
const Login = _ => {
    return (
        <a href='#' className='login font_24'>
            <p>Вход/Регистрация</p>
            <img className='login_img--adaptive' src={login} />
        </a>
    )
}

export default Login