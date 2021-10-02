import s from "./App.module.css"
import React from "react"
import { Route, Switch /* Redirect */ } from "react-router-dom"
import Header from "./components/Header/header"
import Main from "./components/Main/main"
import Footer from "./components/Footer/footer"
import Login from "./components/Login/login"
import ProductSpecification from "./components/ProductSpecification/productSpecification"
import BasketGoods from "./components/BasketGoods/basketGoods"

function App() {
  return (
    <div className={s.app__wrapper}>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/productSpecification" component={ProductSpecification} />
        <Route path="/basketGoods" component={BasketGoods} />
        {/* <Route path="/users" component={} /> */}
        {/* <Route path="/user/:userId?" render={(props) => <User {...props} />} /> */}
        {/* <Route path="/404" component={NotFound} /> */}
        {/* <Redirect to="/404" /> */}
      </Switch>
      <Footer />
    </div>
  )
}

export default App
