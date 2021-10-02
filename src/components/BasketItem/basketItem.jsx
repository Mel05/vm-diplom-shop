import React from "react"
import s from "./BasketItem.module.css"

const BasketItem = () => {
  return (
    <div className={s.basketItem}>
      <div className={s.picture}>picture</div>

      <h1> Product </h1>

      <button className={s.productBtn}> Отмена </button>
    </div>
  )
}

export default BasketItem
