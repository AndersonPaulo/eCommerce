import { Link } from 'react-scroll'
import Shooping from "../assets/carrinho-de-compras.svg"
import Home from "../assets/icon.png"

const Footer = ()=>{

    return(

        <div className="footer">

          <Link to = "section0" offset={-20}  smooth={true} duration={1100}>
              <span className="home" ><img src={Home} alt="" ></img></span>
          </Link>
          <span className="buy_shopping"><img src={Shooping} alt="" ></img></span>
          
        </div>
    )

}
export default Footer