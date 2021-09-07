import React from "react";
import { useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { createError, removeError } from "../error/error"

export const Recovery = () => {
  const email = useRef(null)
  const button = useRef(null)
  const history = useHistory()
  const [loader, setLoader] = useState(false)
  const isDesktop = window.innerWidth > 600

  const onChangeHandler = () => {
    removeError(email.current)
  }

  const submitHandler = () => {
    removeError(email.current)
    setLoader(true)
    setTimeout(() => {
      if (email.current.value.trim() === 'example@example.com') {
        history.push('/success')
      } else {
        createError('Такой email не зарегистрирован.', email.current, null, button.current)
      }
      setLoader(false)
    }, 1000)
  }
  if (isDesktop) {
    return (
      <div className="recovery">
        <img className="recovery__lock" alt="lock_pic" src="./Lock.png"></img>
        <h2 className="recovery__header">Восстановить пароль</h2>
        <span className="recovery__info">Введите email, на который регистрировались ранее</span>
        <input ref={email} onChange={onChangeHandler} className="recovery__input" type="text"></input>
        {loader ?
          <button ref={button} onClick={submitHandler} className="recovery__submit"><img className="rot" alt="loader_pic" src="./loader.png"></img>Отправка</button>
          :
          <button ref={button} onClick={submitHandler} className="recovery__submit">Отправить</button>
        }
        <Link className="recovery__cancel" to="/">Отменить</Link>
      </div>
    )
  }
  
  return (
    <div className="recovery">
      <img className="recovery__lock" alt="lock_pic" src="./Lock.png"></img>
      <h2 className="recovery__header">Восстановить пароль</h2>
      <span className="recovery__info">Введите email, на который регистрировались ранее</span>
      <input ref={email} onChange={onChangeHandler} className="recovery__input" type="text"></input>
        <button ref={button} onClick={submitHandler} className="recovery__submit">Восстановить пароль</button>
      <Link className="recovery__cancel" to="/">Отменить</Link>
    </div>
  )
}