import React from "react";
import { Link } from "react-router-dom"

export const DidNotCome = () => {

  return (
    <div className="didnotcome">
      <h1 className="didnotcome__header">Мне не пришло письмо</h1>
      <span className="didnotcome__info">Письмо может прийти с задержкой в 5-10 минут.<br/>
Также проверьте разные папки почтового ящика (актуально для gmail.com) и папку "Спам".Если письмо все же не пришло, повторите попытку или напишите об этом в тех.поддержку <a className="didnotcome__link" href="#">support@livedune.ru</a> и мы активируем ваш аккаунт.</span>
      <input type="text" placeholder="Email"></input>
      <button className="didnotcome__submit">Отправить заново</button>
      <Link className="didnotcome__cancel" to="/">Отменить</Link>
    </div>
  )
}