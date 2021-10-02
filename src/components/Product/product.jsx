import React from "react"
import s from "./Product.module.css"
import { Link } from "react-router-dom"

const Product = () => {
  return (
    <div className={s.product}>
      <div className={s.picture}>picture</div>
      <h1> Product </h1>
      <button className={s.productBtn}>
        <Link to="/productSpecification"> Открыть карточку </Link>
      </button>
    </div>
  )
}

export default Product
