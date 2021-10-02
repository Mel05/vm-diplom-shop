import s from "./App.module.css"
import React from "react"
import { Route, Switch /* Redirect */ } from "react-router-dom"
import Header from "./components/Header/header"
import Main from "./components/Main/main"
import Footer from "./components/Footer/footer"
import Login from "./components/Login/login"

function App() {
  return (
    <div className={s.app__wrapper}>
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Main} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
