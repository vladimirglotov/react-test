import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createStore } from "redux";
import { rootReducer } from '../redux/rootReducer';


export const Confirm = () => {
  const store = createStore(rootReducer)
  console.log(store)
  const location = useLocation()
  let name = location.search.slice(1)
  return (
    <div className="confirm">
      <span className="confirm__header">Подтвердите ваш e-mail</span>
      <div className="confirm__info">{name}, на ваш E-mail отправлено письмо со ссылкой для <br/> подтверждения. Перейдите по ней, чтобы активировать вашу учетную запись и получить 7 дней бесплатного доступа.</div>
      <button className="confirm__submit">Перейти к почте</button>
      <Link className="confirm__not-come" to="/didnotcome">Мне не пришло письмо</Link>
    </div>
  )
}