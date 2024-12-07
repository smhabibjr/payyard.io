"use client"
import PrelineScript from "@/app/PrelineScript"
import Backtotop from "@/shared/layout-components/backtotop/backtotop"
import Header from "@/shared/layout-components/header/header"
import Sidebar from "@/shared/layout-components/sidebar/sidebar"
import store from "@/shared/redux/store"
import { Fragment,  useState } from "react"
import {  connect } from "react-redux"

const Layout = ({ children }: any) => {

  const [, setMyClass] = useState("");

  const Bodyclickk = () => {
    const theme = store.getState();
    if (localStorage.getItem("ynexverticalstyles") == "icontext") {
      setMyClass("");
    }
    if (window.innerWidth > 992) {
      if (theme.iconOverlay === 'open') {
        // Do nothing since ThemeChanger is removed
      }
    }
  }

  return (
    <>
      <Fragment>
        <div className='page'>
          <Header />
          <Sidebar />
          <div className='content'>
            <div className='main-content' onClick={Bodyclickk}>
              {children}
            </div>
          </div>
        </div>
        <Backtotop />
        <PrelineScript />
      </Fragment>
    </>
  )
}

const mapStateToProps = (state: any) => ({
  local_varaiable: state
});

export default connect(mapStateToProps)(Layout);
