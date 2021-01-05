import React from "react"
import {AiOutlineClose} from "react-icons/ai"
import Zoom from 'react-reveal/Zoom';


function Popup(props){

      return(
      <div className="popup" onClick={props.close}>
            <Zoom>
                  <div className="popup-item">
                        <div className="popup-exit-icon"><AiOutlineClose className="popup-exit-iconn"/></div>
                        {props.children}
                  </div>
            </Zoom>
      </div>
      )

}

export default Popup