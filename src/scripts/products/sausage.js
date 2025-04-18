import Itens from "../../assets/linguiça.jpg"
import Shooping from "../../assets/carrinho-de-compras.svg"
import { Element } from 'react-scroll'

const products = ()=>{

    return(
        
        <div className="name_list">
        <Element name="section2">
            <span className="name">LINGUIÇAS</span>
        </Element>

            <div className="intens">
           
          
          
                <div className="products">
                
                    <span className="discrition">Frango</span>
                    <span className="price">R$ 24,99</span>
                    <span className="image"><img src={Itens} alt="" width="250rem"></img></span>
                    
                    <span className="add_shopping"><img src={Shooping} alt="" ></img></span>
                </div>
            
                <div className="products">
                    
                    <span className="discrition">Linguiça</span>
                    <span className="price">R$ 12,99</span>
                    <span className="image"><img src={Itens} alt="" width="250rem" ></img></span>
                    
                    <span className="add_shopping"><img src={Shooping} alt="" ></img></span>
                </div>
            
                <div className="products">
                <span className="discrition">Linguiça</span>
                    <span className="price">R$ 24,99</span>
                    <span className="image"><img src={Itens} alt="" width="250rem"></img></span>
                   
                    <span className="add_shopping"><img src={Shooping} alt="" ></img></span>
                </div>

                <div className="products">
                <span className="discrition">Linguiça</span>
                    <span className="price">R$ 8,99</span>
                    <span className="image"><img src={Itens} alt="" width="250rem"></img></span>
                   
                    <span className="add_shopping"><img src={Shooping} alt="" ></img></span>
                </div>
            </div>
        </div>
       
    )


}
export default products