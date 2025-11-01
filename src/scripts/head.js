import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEstiloContext } from "../components/Context"
import ShareButtom from '../scripts/sheareButon'
import MenuHorizontal from "../scripts/menuHorizontal"
import SearchItens from '../scripts/serch'
import logo from "../assets/oie_transparent.png"
import Search from "../assets/procurar.svg"
import Share from "../assets/compartilhar.png"
import '../styles/head.css'

const Head = () => {
 
    const [estilosSeah , setEstilos] = useState({ display: 'none' })
    const menuItems = ['PROMOÇÃO','FRANGOS','LINGUIÇAS','ACOMPANHAMENTOS','COSTELINHAS','SOBREMESSAS','BEBIDAS','PROMOÇÃO','FRANGOS','LINGUIÇAS','ACOMPANHAMENTOS','COSTELINHAS','SOBREMESSAS','BEBIDAS','PROMOÇÃO','FRANGOS','LINGUIÇAS','ACOMPANHAMENTOS','COSTELINHAS','SOBREMESSAS','BEBIDAS','PROMOÇÃO','FRANGOS','LINGUIÇAS','ACOMPANHAMENTOS','COSTELINHAS','SOBREMESSAS','BEBIDAS']
    const { mostrarFooter } = useEstiloContext()
    const { mostrarScroll } = useEstiloContext()
    const { esconderScrool } = useEstiloContext()
    const { estilos } = useEstiloContext()


    const ShowSearch = () =>{
        const newDisplay = estilosSeah === 'none' ? 'flex' : 'none'
        setEstilos(newDisplay)
    }
   
   
    return(

      <div className="head">

                  <div className="menu" >

                    <Link to="/Home"><div className="logo" data-qa="logo" onClick={mostrarFooter} ><img src={logo} onClick={mostrarScroll} alt=""></img></div></Link>
                    <div className="storeSlogan">O melhor da Zona Oeste</div>
                    <SearchItens estilo={{ display: estilosSeah }} />
                    <div className="search" data-qa="search" onClick={ShowSearch}><img src={Search} alt=""></img></div>
                    <div className="share" data-qa="share" onClick={()=>ShareButtom.compartilhar()}><img src={Share} alt=""></img></div>
                    <Link to="/" ><div className="logof" data-qa="logof" >sair</div></Link>

                  </div>

                  <div className="submenu">

                    <div className="opened" data-qa="opened">Abre Hoje às 10h</div>          
                    <div className="perfil_button" data-qa="perfil_button" onClick={esconderScrool}><Link to="/perfil-loja">Perfil da loja</Link></div>

                  </div>

                  <div className='fhatherScroll' style={{visibility:estilos}} >      

                    <MenuHorizontal items = {menuItems} />             

                  </div>
                 
      </div>            

    )

}
export default Head