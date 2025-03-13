
// Below code are the imported dependency fro m react and others
import AnchorLink from "react-anchor-link-smooth-scroll"
import { useState, useRef } from "react"
import "./Navbar.css"

// Below code is used to import the menu icons from assets folders
import openMenu from "../../assets/icons/menu_open.svg"
import closeMenu from "../../assets/icons/menu_close.svg"
import siteLogo from "/images/logo.jpg"



const Navbar = () => {

  // Below code is the useState for the menuBar
  const [menu, setMenu] = useState("home");

  // Below code is the useRef
  const menuRef = useRef();

  // Below code function is used to Open Moblie Menu
  const openMoblieMenu = () =>{
    menuRef.current.style.right = "0";
  }

  // Below code function is used to Close Moblie Menu
  const closeMoblieMenu = () =>{
    menuRef.current.style.right = "-400px";
  }

  return (
    <div className="navbar">
      {/* Below code is the site logo */}
      <img src={siteLogo} alt="247Rectify Logo" className="siteLogo" />

      {/* Below code is the Open Nav SideBar */}
      <img src={openMenu} alt="ListMenu Open" onClick={openMoblieMenu} className="navOpen" />

      {/* Below code is used to create a ul element for the nav-menu */}
      {/* ul element for the nav-menu Start Here */}
      <ul ref={menuRef} className="navMenu">

        {/* Below code is used to Close Nav SideBar */}
        <img src={closeMenu} alt="CloseMenu" onClick={closeMoblieMenu} className="navClose" />

        {/* Below code is used to create ali element for Home navList */}
        {/* li element for the navList(Home) Start Here */}
        <li className="navList">
          <AnchorLink className="anchorLink" href="#home">
            <p className="navLink" onClick={()=>setMenu("home")}>Home</p>{menu==="home"? <img src="" alt="" /> : <></>}
          </AnchorLink>
        </li>
        {/* li element for the navList(Home) End Here */}
        
        {/* li element for the navList(About Us) Start Here */}
        <li className="navList">
          <AnchorLink className="anchorLink" offset={50} href="#about">
            <p className="navLink" onClick={()=>setMenu("about")}>About Us</p>{menu==="about"? <img src="" alt="" /> : <></>}
          </AnchorLink>
        </li>
        {/* li element for the navList(About Us) End Here */}

        {/* li element for the navList(Our Work) Start Here */}
        <li className="navList">
          <AnchorLink className="anchorLink" offset={50} href="#mywork">
            <p className="navLink" onClick={()=>setMenu("mywork")}>Our Work</p>{menu==="mywork"? <img src="" alt="" /> : <></>}
          </AnchorLink>
        </li>
        {/* li element for the navList(Our Work) End Here */}

        {/* li element for the navList(Our Services) Start Here */}
        <li className="navList">
          <AnchorLink className="anchorLink" offset={50} href="#service">
            <p className="navLink" onClick={()=>setMenu("service")}>Our Services</p>{menu==="service"? <img src="" alt="" /> : <></>}
          </AnchorLink>
        </li>
        {/* li element for the navList(Our Services) End Here */}

        {/* li element for the navList(Contact Us) Start Here */}
        <li className="navList">
          <AnchorLink className="anchorLink" offset={50} href="#contact">
            <p className="navLink" onClick={()=>setMenu("contact")}>Contact Us</p>{menu==="contact"? <img src="" alt="" /> : <></>}
          </AnchorLink>
        </li>
        {/* li element for the navList(Contact Us) End Here */}

      </ul>
      {/* ul element for the nav-menu End Here */}

      {/* Below code is the request a quote div element */}
      <div className="requestQuotes">
        <AnchorLink className="anchorLink" offset={50} href="#contact">Request a Quotes</AnchorLink>
      </div>
    </div>
  )
}

export default Navbar
