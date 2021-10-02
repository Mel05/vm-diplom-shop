import React from "react"
import s from "./BasketGoods.module.css"
import BasketItem from "../BasketItem/basketItem"

const BasketGoods = () => {
  return (
    <div className={s.basketGoods}>
      <div className={s.allBasketGoods}>
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
      </div>

      <div className={s.totalBasketGoods}>
        <p> Итого </p>
        <p> Итоговая сумма </p>
        <button className={s.allGoodsBtn}> Оформить заказ </button>
      </div>
    </div>
  )
}

export default BasketGoods
