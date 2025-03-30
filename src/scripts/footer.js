import { Link } from 'react-scroll'
import { useEstiloContext } from "../components/Context"
import { Link as LinkRouter} from 'react-router-dom'
import Shooping from "../assets/carrinho-de-compras.svg"
import Home from "../assets/icon.png"

const Footer = ()=>{
    
    const { estilos } = useEstiloContext()
    const { esconderFooter } = useEstiloContext()


    return(

        <div className="footer" style={{visibility:estilos}}>

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