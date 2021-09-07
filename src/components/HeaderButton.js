
import React from "react";
import { Link, useLocation } from "react-router-dom";

export const HeaderButton = () => {
  const location = useLocation()
  const path = location.pathname

  if (path === '/') {
    return (
      <div className="header__buttons">
        <span>У вас нет аккаунта?</span>
        <Link to="/registration" className="header__button">Регистрация</Link>
      </div>
    )  
  }
  if (path === '/registration') {
    return (
      <div className="header__buttons">
        <span>У вас есть аккаунт?</span>
        <Link to="/" className="header__button">Войти</Link>
      </div>
    )
  }
  if (path === '/confirm' || path === '/didnotcome') {
    return (
      <div className="header__buttons">
        <span>Выйти</span>
      </div>
    )
  }
  return (
    <div className="header__buttons">
    </div>
  )
}