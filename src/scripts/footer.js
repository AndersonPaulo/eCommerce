//import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { useFooterContext } from "../scripts/FooterContext"
import { Link as LinkRouter} from 'react-router-dom'
import Shooping from "../assets/carrinho-de-compras.svg"
import Home from "../assets/icon.png"

const Footer = ()=>{
    
    const { estilosFooter } = useFooterContext()
    const { esconderFooter } = useFooterContext()
    //const [estilosFooterHidden , setEstilosMenu] = useState({ visibility: 'visible' })
    //const hidenFooter = () =>{
     //   const newVisibily = estilosFooterHidden === 'visible' ? 'hidden' : 'hidden'
    //    setEstilosMenu(newVisibily)
      
       
    //}
 

    return(

        <div className="footer" style={{visibility:estilosFooter}}>

          <Link to = "section0" offset={-20}  smooth={true} duration={1100}>
              <span className="home" ><img src={Home} alt="" ></img></span>
          </Link>
          <LinkRouter to="/shopping">
                <span className="buy_shopping" data-qa="buy_shopping"  onClick={esconderFooter} ><img src={Shooping} alt="" ></img></span>
          </LinkRouter>
          
        </div>
    )

}
export default Footer