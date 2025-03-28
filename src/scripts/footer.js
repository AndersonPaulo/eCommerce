import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { Link as LinkRouter} from 'react-router-dom'
import Shooping from "../assets/carrinho-de-compras.svg"
import Home from "../assets/icon.png"

const Footer = ()=>{

    const [estilosFooter,setEstilosFooter] = useState({ visibility: 'visible' })

    const ShowFooter = () =>{
        const newVisibility = estilosFooter === 'visible' ? 'hidden' : 'hidden'
        setEstilosFooter(newVisibility)
  
      }

    return(

        <div className="footer" style={{visibility:estilosFooter}}>

          <Link to = "section0" offset={-20}  smooth={true} duration={1100}>
              <span className="home" ><img src={Home} alt="" ></img></span>
          </Link>
          <LinkRouter to="/shopping">
                <span className="buy_shopping" data-qa="buy_shopping" onClick={ShowFooter} ><img src={Shooping} alt="" ></img></span>
          </LinkRouter>
          
        </div>
    )

}
export default Footer