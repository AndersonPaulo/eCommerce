import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFooterContext } from "../scripts/FooterContext"
import ShareButtom from '../scripts/sheareButon'
import MenuHorizontal from "../scripts/menuHorizontal"
import SearchItens from '../scripts/serch'
import logo from "../assets/oie_transparent.png"
import Search from "../assets/procurar.svg"
import Share from "../assets/compartilhar.png"


const Head = () => {
 
    const [estilos , setEstilos] = useState({ display: 'none' })
    const [estilosMenu , setEstilosMenu] = useState({ visibility: 'visible' })
    const menuItems = ['PROMOÇÃO','FRANGOS','LINGUIÇAS','ACOMPANHAMENTOS','COSTELINHAS','SOBREMESSAS','BEBIDAS','PROMOÇÃO','FRANGOS','LINGUIÇAS','ACOMPANHAMENTOS','COSTELINHAS','SOBREMESSAS','BEBIDAS','PROMOÇÃO','FRANGOS','LINGUIÇAS','ACOMPANHAMENTOS','COSTELINHAS','SOBREMESSAS','BEBIDAS','PROMOÇÃO','FRANGOS','LINGUIÇAS','ACOMPANHAMENTOS','COSTELINHAS','SOBREMESSAS','BEBIDAS']
    const { mostrarFooter } = useFooterContext()

    const ShowSearch = () =>{
        const newDisplay = estilos === 'none' ? 'flex' : 'none'
        setEstilos(newDisplay)
    }
    const ShowFatherScroll = () =>{
      const newVisibily = estilosMenu === 'visible' ? 'hidden' : 'hidden'
      setEstilosMenu(newVisibily)

    }
    const showAll = () =>{
      const newVisibily = estilosMenu === 'hidden' ? 'visible' : 'visible'
      setEstilosMenu(newVisibily)
    
      
    }
   
    return(

      <div className="head">

                  <div className="menu" >

                    <Link to="/"><div className="logo" data-qa="logo" onClick={mostrarFooter} ><img src={logo} onClick={showAll} alt=""></img></div></Link>
                    <div className="storeSlogan">O melhor da Zona Oeste</div>
                    <SearchItens estilo={{ display: estilos }} />
                    <div className="search" data-qa="search" onClick={ShowSearch}><img src={Search} alt=""></img></div>
                    <div className="share" data-qa="share" onClick={()=>ShareButtom.compartilhar()}><img src={Share} alt=""></img></div>

                  </div>

                  <div className="submenu">

                    <div className="opened" data-qa="opened">Abre Hoje às 10h</div>          
                    <div className="perfil_button" data-qa="perfil_button" onClick={ShowFatherScroll}><Link to="/perfil-loja">Perfil da loja</Link></div>

                  </div>

                  <div className='fhatherScroll' style={{visibility:estilosMenu}} >      

                    <MenuHorizontal items = {menuItems} />             

                  </div>
                 
      </div>            

    )

}
export default Head