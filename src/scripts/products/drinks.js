import Itens from "../../assets/coca-Cola.jpg"
import Shooping from "../../assets/carrinho-de-compras.svg"
import { Element } from 'react-scroll'

const products = ()=>{

    return(
        
        <div className="name_list">
            <Element name="section6">
            <span className="name">BEBIDAS</span>
            </Element>

            <div className="intens">
           
          
          
                <div className="products">
                
                    <span className="discrition">Coca Cola</span>
                    <span className="price">R$ 11,99</span>
                    <span className="image"><img src={Itens} alt="" ></img></span>
                   
                    <span className="add_shopping"><img src={Shooping} alt="" ></img></span>
                </div>
            
                <div className="products">
                    
                    <span className="discrition">Coca Cola</span>
                    <span className="price">R$ 12,99</span>
                    <span className="image"><img src={Itens} alt=""></img></span>
                    
                    <span className="add_shopping"><img src={Shooping} alt="" ></img></span>
                </div>
            
                <div className="products">
                <span className="discrition">Coca Cola</span>
                    <span className="price">R$ 14,99</span>
                    <span className="image"><img src={Itens} alt=""></img></span>
                    
                    <span className="add_shopping"><img src={Shooping} alt="" ></img></span>
                </div>

                <div className="products">
                <span className="discrition">Coca Cola</span>
                    <span className="price">R$ 14,99</span>
                    <span className="image"><img src={Itens} alt=""></img></span>
                    
                    <span className="add_shopping"><img src={Shooping} alt="" ></img></span>
                </div>
            </div>
        </div>
       
    )


}
export default products