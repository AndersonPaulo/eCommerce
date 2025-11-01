//import { useState } from 'react';
import { Link } from 'react-scroll'
import { useEstiloContext } from "../components/Context"
import { Link as LinkRouter} from 'react-router-dom'
import Shooping from "../assets/carrinho-de-compras.svg"
import Home from "../assets/icon.png"
import "../styles/footer.css"


const Footer = ()=>{

    

    const { total } = useEstiloContext()
    const { estilos } = useEstiloContext()
    const { esconderFooter } = useEstiloContext()
    const { esconderScrool } = useEstiloContext()

    return(

        <div className="footer" style={{visibility:estilos}}>
          
          <Link to = "section0" offset={-105}  smooth={true} duration={1100}>
              <span className="home" ><img src={Home} alt="" ></img></span>
          </Link>

          {/* NOVO: Wrapper 'shopping-container' adicionado para posicionamento relativo do contador */}
          <div className="shopping-container">
            <span className="unity">{total}</span>
            <LinkRouter to="/shopping">
                  <span className="buy_shopping" data-qa="buy_shopping"  onClick={() => {esconderFooter(); esconderScrool()}}>
                      <img src={Shooping} alt="" ></img>
                  </span>
            </LinkRouter>
          </div>
        
        </div>
    )

}
export default Footer