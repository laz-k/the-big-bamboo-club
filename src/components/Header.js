import { useState, useEffect } from "react"
import {AppBar, Toolbar, IconButton} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import SideDrawer from "./SideDrawer"

const Header = () => {

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(false)

  const toggleDrawer = (value) => {
    setDrawerOpen(value)
  }

  const handleScroll = () => {
    if(window.scrollY > 0){
      setShowHeader(true)
    } else {
      setShowHeader(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  },[])

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: showHeader ? "rgba(0,0,0, 0.5)" : "transparent",
        boxShadow: "none",
        padding: "10px 0px"
      }}
    >
      <Toolbar>
        <div className="header-logo-bg">
          <img className="header-logo" src={require("../resources/logo-2.png").default} alt="logo" />
        </div>

        <IconButton
          aria-label="Menu"
          color="inherit"
          onClick={()=> toggleDrawer(true)}
          >
          <MenuIcon/>
        </IconButton>
        <SideDrawer
         open={drawerOpen}
         onClose={(value)=>toggleDrawer(value)}
         />
      </Toolbar>
    </AppBar>
  )
}

export default Header
