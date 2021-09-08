import React from "react";
import { Link } from "react-router-dom";
export const Success =  () => {

  return (
    <div className="success">
      <img className="success__message" alt="message_pic" src="/react-test/message.png"></img>
      <h2 className="success__header">Письмо отправлено</h2>
      <span className="success__info">На указанный вами e-mail было отправлено письмо для смены пароля</span>
      <Link to="/" className="success__submit">Вернуться на главную</Link>
    </div>
  )
}