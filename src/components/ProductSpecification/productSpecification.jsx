import React from "react"
import s from "./ProductSpecification.module.css"
import { Link } from "react-router-dom"

const ProductSpecification = () => {
  return (
    <div className={s.productSpecification}>
      <div className={s.wayProduct}>
        <h1> путь к товару </h1>
      </div>

      <div className={s.productItem}>
        <div className={s.picture}>picture</div>
        <h1> Product Item </h1>
        <button className={s.productItemBtn}>
          <Link to="/basketGoods"> Купить </Link>
        </button>
      </div>
    </div>
  )
}

export default ProductSpecification
