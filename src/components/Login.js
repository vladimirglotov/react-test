import React from "react";
import { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { createError, removeError} from '../error/error.js';


export const Login = () => {

  const history = useHistory()
  const button = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const submitHandler = () => {
    removeError(email.current, password.current)
    if (!email.current.value || !password.current.value) {
      createError('Введите email, Введите пароль', email.current, password.current, button.current)
    } else if (email.current.value.trim() === process.env.REACT_APP_EMAIL && password.current.value.trim() === process.env.REACT_APP_PASSWORD) {
      history.push('/success')
    } else {
      createError('Неверный email или пароль', email.current, password.current, button.current)
    }
  }

  return (
    <div className="login">
      <h1 className="login__header">Войти</h1>
      <span className="login__greeting">Добро пожаловать, рады видеть вас снова &#128075;</span>
      <div className="login__buttons">
        <button><img className="login__button-img" alt="button_pic" src="/react-test/Facebook.png"></img>Войти через Facebook</button>
        <button><img className="login__button-img" alt="button_pic" src="/react-test/Google.png"></img>Войти через Google</button>
      </div>
      <span className="login__or">или</span>
      <input type="text" placeholder="Email" onChange={() => removeError(email.current, password.current)} ref={email}></input>
      <input type="text" placeholder="Пароль" onChange={() => removeError(email.current, password.current)} ref={password}></input>
      <button ref={button} onClick={submitHandler} className="login__submit">Войти в аккаунт</button>
      <Link to="/recovery" className="login__forget">Забыли пароль?</Link>
    </div>
  )
}