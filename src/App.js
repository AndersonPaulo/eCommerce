import React, { useState } from 'react'
import './App.css'
import MenuHorizontal from "./scripts/menuHorizontal"
import SearchItens from './scripts/search'
import Promotion from './scripts/products/promotion'
import Chickens from './scripts/products/chickens'
import Dessert from './scripts/products/dessert'
import Drinks from './scripts/products/drinks'
import FollowUp from './scripts/products/followUp'
import Ribs from './scripts/products/ribs'
import Sousage from './scripts/products/sausage'
import logo from "./assets/oie_transparent.png"
import Search from "./assets/procurar.svg"
import Share from "./assets/compartilhar.png"
import Shooping from "./assets/carrinho-de-compras.svg"
import Home from "./assets/icon.png"





function App() {
const [estilos , setEstilos] = useState({ display: 'none' })
const menuItems = ['PROMOÇÃO','FRANGOS','LINGUIÇAS','ACOMPANHAMENTOS','COSTELINHAS','SOBREMESSAS','BEBIDAS','PROMOÇÃO','FRANGOS','LINGUIÇAS','ACOMPANHAMENTOS','COSTELINHAS','SOBREMESSAS','BEBIDAS','PROMOÇÃO','FRANGOS','LINGUIÇAS','ACOMPANHAMENTOS','COSTELINHAS','SOBREMESSAS','BEBIDAS','PROMOÇÃO','FRANGOS','LINGUIÇAS','ACOMPANHAMENTOS','COSTELINHAS','SOBREMESSAS','BEBIDAS']

const ShowSearch = () =>{
      const newDisplay = estilos === 'none' ? 'flex' : 'none'
      setEstilos(newDisplay)
  
}
  return (
    <div className="App">
      <header className="App-header">
        <div className="menu">
          <div className="logo"><img src={logo} alt=""></img></div>
          <div className="storeSlogan">O melhor da Zona Oeste</div>
          <SearchItens estilo={{ display: estilos }} />
          <div className="search" onClick={ShowSearch}><img src={Search} alt=""></img></div>
          <div className="share"><img src={Share} alt=""></img></div>
        </div>
        <div className="submenu">
          <div className="opened">Abre Hoje às 10h</div>          
          <div className="perfil_button">Perfil da loja</div>
        </div>
        <div className='fhatherScroll' >      

            <MenuHorizontal items = {menuItems}/>             
          
        </div>
        
        <div className="all_product">
          <Promotion/>
          <Chickens/>
          <Sousage/>
          <FollowUp/>
          <Ribs/>
          <Dessert/>
          <Drinks/>
        </div>  
          
         
       
        <div className="footer">
          <span className="home"><img src={Home} alt="" ></img></span>
          <span className="buy_shopping"><img src={Shooping} alt="" ></img></span>
          
        </div>
      </header>
    </div>
  );
}

export default App;
