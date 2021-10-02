import React from "react"
import s from "./Products.module.css"
import Product from "../Product/product"

const Products = () => {
  return (
    <div className={s.products}>
      <Product />
      <Product />
      <Product />
    </div>
  )
}

export default Products
