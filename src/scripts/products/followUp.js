import Itens from "../../assets/farofa.jpg"
import Shooping from "../../assets/carrinho-de-compras.svg"
import { Element } from 'react-scroll'

const products = ()=>{

    return(
        
        <div className="name_list">
        <Element name="section3">
        <span className="name">ACOMPANHAMENTOS</span>
        </Element>

            <div className="intens">
           
          
          
                <div className="products">
                
                    <span className="discrition">Farofa</span>
                    <span className="price">R$ 4,99</span>
                    <span className="image"><img src={Itens} alt="" ></img></span>
                   
                    <span className="add_shopping"><img src={Shooping} alt="" ></img></span>
                </div>
            
                <div className="products">
                    
                    <span className="discrition">Vinagrete</span>
                    <span className="price">R$ 4,99</span>
                    <span className="image"><img src={Itens} alt=""></img></span>
                   
                    <span className="add_shopping"><img src={Shooping} alt="" ></img></span>
                </div>
            
                <div className="products">
                <span className="discrition">Maionese</span>
                    <span className="price">R$ 4,99</span>
                    <span className="image"><img src={Itens} alt=""></img></span>
                   
                    <span className="add_shopping"><img src={Shooping} alt="" ></img></span>
                </div>

                <div className="products">
                <span className="discrition">Salpicão</span>
                    <span className="price">R$ 4,99</span>
                    <span className="image"><img src={Itens} alt=""></img></span>
                    
                    <span className="add_shopping"><img src={Shooping} alt="" ></img></span>
                </div>
            </div>
        </div>
       
    )


}
export default products