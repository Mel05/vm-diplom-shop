import React from "react"
import s from "./Header.module.css"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className={s.header}>
      <h1> Header </h1>

      <button className={s.loginBtn}>
        <Link to="/login"> Вход/Регистрация </Link>
      </button>
    </div>
  )
}

export default Header
