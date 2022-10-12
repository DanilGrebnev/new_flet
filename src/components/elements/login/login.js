import './login.css'
import login from '../../img/1_header/login.svg'
const Login = _ => {
    return (
        <a className='login font_24'>
            <p>Вход/Регистрация</p>
            <img id="h_login" src={login} />
        </a>
    )
}

export default Login