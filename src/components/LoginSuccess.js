import React from "react";
import { Link } from "react-router-dom";

export const LoginSuccess =  () => {

  return (
    <div className="success">
      <h2 className="success__header">Вы вошли в систему</h2>
      <Link to="/" className="success__submit">Выйти</Link>
    </div>
  )
}