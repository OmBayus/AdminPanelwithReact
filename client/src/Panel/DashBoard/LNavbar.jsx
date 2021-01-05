import React, { useEffect, useState } from "react"
import {AiOutlineDashboard} from "react-icons/ai"
import {GoDashboard} from "react-icons/go"


function Navbar(){

      // const [MNavbar,SetMNavbar] = useState(false)

      // useEffect(()=>{
      //       window.addEventListener('mouseover', (event) => {
      //             if(event.target.className === "lnavbar-icons" || event.target.className === "lnavbar-more"){
      //                   SetMNavbar(true)
      //             }else{
      //                   SetMNavbar(false)
      //             }
      //           });
      // },[])


      return(
            <div className="lNavbar" style={{overflow:"auto"}}>
                  <div className="lnavbar-topic">Admin Panel</div>
                  <ul>
                        <li className="lnavbar-items"><GoDashboard/><span>DashBoard</span></li>
                        <li className="lnavbar-basliklar">AnaSayfa</li>
                        <li className="lnavbar-items"><AiOutlineDashboard/></li>
                        <li className="lnavbar-items"><AiOutlineDashboard/></li>
                        <li className="lnavbar-basliklar">Kullanici İslemleri</li>
                        <li className="lnavbar-items"><AiOutlineDashboard/></li>
                        <li className="lnavbar-items"><AiOutlineDashboard/></li>
                   </ul>
                  {/* <div className={MNavbar ? "lnavbar-more" : "d-none" }></div> */}
                  
            </div>
      )
}


export default Navbar