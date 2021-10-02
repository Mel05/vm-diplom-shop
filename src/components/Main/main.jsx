import s from "./Main.module.css"
import React from "react"
import { Route, Switch } from "react-router-dom"
import SearchBar from "../SearchBar/searchBar"
import SubMain from "../SubMain/subMain"
import ProductSpecification from "../ProductSpecification/productSpecification"
import BasketGoods from "../BasketGoods/basketGoods"

const Main = () => {
  return (
    <div className={s.main}>
      <SearchBar />
      <Switch>
        <Route path="/" exact component={SubMain} />
        <Route path="/productSpecification" component={ProductSpecification} />
        <Route path="/basketGoods" component={BasketGoods} />
      </Switch>
    </div>
  )
}

export default Main
