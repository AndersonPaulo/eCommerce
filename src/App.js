import logo from "./assets/oie_transparent.png";
import Search from "./assets/procurar.svg";
import Share from "./assets/compartilhar.png";
import Add from "./assets/cruz.svg";
import Shooping from "./assets/carrinho-de-compras.svg";
import Home from "./assets/icon.png";
import Itens from "./assets/Frango_Assado.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="menu">
          <div className="logo"><img src={logo} alt=""></img></div>
          <div className="storeSlogan">O melhor da Zona Oeste</div>
          <div className="search"><img src={Search} alt=""></img></div>
          <div className="share"><img src={Share} alt=""></img></div>
        </div>
        <div className="submenu">
          <div className="opened">Abre Hoje às 10h</div>          
          <div className="perfil_button">Perfil da loja</div>
        </div>
        <div className="list">
              <ul>
                <li className="menu_one">PROMOÇÃO DO DIA</li>
                <li className="menu_two">FRANGOS</li>
                <li className="menu_tree">LINGUIÇAS</li>
                <li className="menu_four">ACOMPANHAMENTOS</li>
                <li className="menu_five">CUSTELINHAS</li>
                <li className="menu_six">SOBREMESSAS</li>
                <li className="menu_seven">BEBIDAS</li>
              </ul>
        </div>
        <div className="name_list">PROMOÇÃO DO DIA</div>
          <hr className="hr_prime"></hr>
        <div className="intens">
          <div className="products">
           
            <span className="discrition">Frango/Batatas</span>
            <span className="price">R$ 24,99</span>
            <span className="image"><img src={Itens} alt="" ></img></span>
            <span className="add_item"><img src={Add} alt="" ></img><span className="unity">0</span></span>
            <span className="add_shopping"><img src={Shooping} alt="" ></img></span>
            <hr className="divisor_hr"></hr>
          </div>
          
          <div className="products">
            
            <span className="discrition">Frango/Batatas/Linguiça</span>
            <span className="price">R$ 32,99</span>
            <span className="image"><img src={Itens} alt=""></img></span>
            <span className="add_item"><img src={Add} alt=""></img><span className="unity">0</span></span>
            <span className="add_shopping"><img src={Shooping} alt="" ></img></span>
            <hr className="divisor_hr"></hr>
          </div>
         
          <div className="products">
          <span className="discrition">Frango/Batatas/Salpicão</span>
            <span className="price">R$ 44,99</span>
            <span className="image"><img src={Itens} alt=""></img></span>
            <span className="add_item"><img src={Add} alt="" ></img><span className="unity">0</span></span>
            <span className="add_shopping"><img src={Shooping} alt="" ></img></span>
            <hr className="divisor_hr"></hr>
          </div>

          <div className="products">
          <span className="discrition">Frango/Costelinha</span>
            <span className="price">R$ 44,99</span>
            <span className="image"><img src={Itens} alt=""></img></span>
            <span className="add_item"><img src={Add} alt="" ></img><span className="unity">0</span></span>
            <span className="add_shopping"><img src={Shooping} alt="" ></img></span>
            <hr className="divisor_hr"></hr>
          </div>
          
        </div>

        <div className="name_list_two">FRANGOS</div>
          
       
        <div className="footer">
          <span className="home"><img src={Home} alt="" ></img></span>
          <span className="buy_shopping"><img src={Shooping} alt="" ></img></span>
          
        </div>
      </header>
    </div>
  );
}

export default App;
