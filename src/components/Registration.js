import React from "react";
import { useRef } from "react"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { createError, removeError } from "../error/error"


export const Registration = () => {
  const history = useHistory()
  const [hasPromoCode, setHasPromoCode] = useState(false)
  
  const name = useRef(null)
  const email = useRef(null)
  const promo = useRef(null)
  const password = useRef(null)

  const submitHandler = () => {
    const re = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u
    if (re.test(email.current.value.trim())) {
     history.push({pathname:'/confirm', search: name.current.value.trim()})
    } else {
      createError('Возможно вы ошиблись в указании почтового сервиса', email.current, null, password.current)
    }
  }

  return (
    <div className="registration">
      <h1 className="registration__header">Регистрация</h1>
      <span className="registration__info">Зарегистрируйся и получи доступ к аналитике аккаунтов.</span>
      <div className="registration__buttons">
        <button><img alt="button_pic" src="/react-test/Facebook.png"></img>Войти через Facebook</button>
        <button><img alt="button_pic" src="/react-test/Google.png"></img>Войти через Google</button>
      </div>
      <div className="registration__or">или</div>
      <input ref={name} type="text" placeholder="Имя"></input>
      <input type="text" onChange={() => removeError(email.current, null)} ref={email} placeholder="Email" ></input>
      <input ref={password} type="password" placeholder="Пароль"></input>
      {hasPromoCode ?
        <input type="text" placeholder="Промокод" ref={promo}></input>
        :
        <div className="registration__has-promo" onClick={() => setHasPromoCode(true)}>У меня есть промокод</div>
      }
      <button onClick={submitHandler} className="registration__submit">Создать аккаунт</button>
      <span className="registration__agreement">Создавая аккаунт, я согласен с <a href="#">условиями оферты </a></span>
    </div>
  )
}