import Itens from "../../assets/sorvete.jpg"
import Shooping from "../../assets/carrinho-de-compras.svg"
import { Element } from 'react-scroll'

const products = ()=>{

    return(
        
        <div className="name_list">
         <Element name="section5">
            <span className="name">SOBREMESSA</span>
        </Element>

            <div className="intens">
           
          
          
                <div className="products">
                
                    <span className="discrition">Bolo de Pote</span>
                    <span className="price">R$ 24,99</span>
                    <span className="image"><img src={Itens} alt=""  width="250rem"></img></span>
                   
                    <span className="add_shopping"><img src={Shooping} alt="" ></img></span>
                </div>
            
                <div className="products">
                    
                    <span className="discrition">Pudin</span>
                    <span className="price">R$ 32,99</span>
                    <span className="image"><img src={Itens} alt="" width="250rem"></img></span>
                   
                    <span className="add_shopping"><img src={Shooping} alt="" ></img></span>
                </div>
            
                <div className="products">
                <span className="discrition">Soverte</span>
                    <span className="price">R$ 44,99</span>
                    <span className="image"><img src={Itens} alt="" width="250rem"></img></span>
                   
                    <span className="add_shopping"><img src={Shooping} alt="" ></img></span>
                </div>

                <div className="products">
                <span className="discrition">Chocolate</span>
                    <span className="price">R$ 44,99</span>
                    <span className="image"><img src={Itens} alt="" width="250rem"></img></span>
                   
                    <span className="add_shopping"><img src={Shooping} alt="" ></img></span>
                </div>
            </div>
        </div>
       
    )


}
export default products