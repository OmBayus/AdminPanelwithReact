import React from "react"
import {Navbar,Dropdown} from "react-bootstrap"
import {CgProfile} from "react-icons/cg"
import {BsFillBellFill} from "react-icons/bs"



function tNavbar(props){



      return(
      <Navbar style={{backgroundColor:"#2A2B36"}} variant="dark" expand="lg">
            <Navbar.Brand href="#home" className="ml-3">{props.children}</Navbar.Brand>
            <Dropdown className="ml-auto mx-2">
                  <Dropdown.Toggle variant="dark" bsPrefix="none">
                  <BsFillBellFill/>
                  <span className="tNavbar-Bildirim">3</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu alignRight="false" className="tNavbar-DropMenu">
                  <Dropdown.Item className="tNavbar-DropMenu-Item" style={{"pointer-events":"none"}} href="#/action-1">Bildirim-1</Dropdown.Item>
                  <Dropdown.Item className="tNavbar-DropMenu-Item" style={{"pointer-events":"none"}} href="#/action-1">Bildirim-2</Dropdown.Item>
                  <Dropdown.Item className="tNavbar-DropMenu-Item" style={{"pointer-events":"none"}} href="#/action-1">Bildirim-3</Dropdown.Item>
                  </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                  <Dropdown.Toggle variant="dark" bsPrefix="none">
                  <CgProfile/>
                  </Dropdown.Toggle>

                  <Dropdown.Menu alignRight="false" className="tNavbar-DropMenu">
                  <Dropdown.Item className="tNavbar-DropMenu-Item" href="#/action-1">Kullanıcı Ayarları</Dropdown.Item>
                  <Dropdown.Item className="tNavbar-DropMenu-Item" href="#/action-2">Çıkış Yap</Dropdown.Item>
                  </Dropdown.Menu>
            </Dropdown>
      </Navbar>
      )
}


export default tNavbar