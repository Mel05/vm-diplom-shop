import React from "react"
import s from "./Content.module.css"
import SortList from "../SortList/sortList"
import Products from "../Products/products"

const Content = () => {
  return (
    <div className={s.content}>
      <SortList />
      <Products />
    </div>
  )
}

export default Content
