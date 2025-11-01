import Itens from "../../assets/Frango_Assado.png"
import Shooping from "../../assets/carrinho-de-compras.svg"
import { Element } from 'react-scroll'
const products = ()=>{

    return(
        
        <div className="name_list">
        <Element name="section1">
        <span className="name">FRANGOS</span>
        </Element>

            <div className="intens">
           
          
          
                <div className="products">
                
                    <span className="discrition">Frango Simples</span>
                    <span className="price">R$ 24,99</span>
                    <span className="image"><img src={Itens} alt="" ></img></span>
                   
                    <span className="add_shopping"><img src={Shooping} alt="" ></img></span>
                </div>
            
                <div className="products">
                    
                    <span className="discrition">Frango/linquiça</span>
                    <span className="price">R$ 32,99</span>
                    <span className="image"><img src={Itens} alt=""></img></span>
                    
                    <span className="add_shopping"><img src={Shooping} alt="" ></img></span>
                </div>
            
                <div className="products">
                <span className="discrition">Frango/linguiça/Costelinha</span>
                    <span className="price">R$ 44,99</span>
                    <span className="image"><img src={Itens} alt=""></img></span>
                    
                    <span className="add_shopping"><img src={Shooping} alt="" ></img></span>
                </div>

                <div className="products">
                <span className="discrition">Frango/linguiça/bacon</span>
                    <span className="price">R$ 44,99</span>
                    <span className="image"><img src={Itens} alt=""></img></span>
                   
                    <span className="add_shopping"><img src={Shooping} alt="" ></img></span>
                </div>
            </div>
        </div>
       
    )


}
export default products