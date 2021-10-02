import React from "react"
import s from "./SubMain.module.css"
import NavBar from "../NavBar/navBar"
import Content from "../Content/content"

const SubMain = () => {
  return (
    <div className={s.subMain}>
      <NavBar />
      <Content />
    </div>
  )
}

export default SubMain
