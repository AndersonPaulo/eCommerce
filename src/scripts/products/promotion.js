import Itens from "../../assets/Frango_Assado.png"
import ItensOne from "../../assets/costelinha.jpg"
import Itenstow from "../../assets/batata-frita.jpg"
import Itenstree from "../../assets/linguiça.jpg"
import Shooping from "../../assets/carrinho-de-compras.svg"
import { Element } from 'react-scroll'
import CartSlect from "../../components/CartToSelect"
import { useEstiloContext } from "../../components/Context"

const cartSelect = new CartSlect()

const Products = ()=>{

    
    const { mostrarTotal } = useEstiloContext()
    return(
        
        <div name="section0" className="name_list">
            <Element >
            <span className="name">PROMOÇÃO DO DIA</span>
            </Element>       

            <div className="intens">         
          
          
                <div className="products">
                
                    <span className="discrition">Frango</span>
                    <span className="price">R$ 24,99</span>
                    <span className="image"><img src={Itens} alt="" ></img></span>                
                    <span className="add_shopping" onClick={()=>{cartSelect.AddUpdateOrQuantity(1,1,"Frango",24.99);mostrarTotal()}}><img src={Shooping} alt="" ></img></span>
                </div>
            
                <div className="products">
                    
                    <span className="discrition">Costelinha</span>
                    <span className="price">R$ 12,99</span>
                    <span className="image"><img src={ItensOne} alt=""  width="240rem"></img></span>                  
                    <span className="add_shopping" onClick={()=>{cartSelect.AddUpdateOrQuantity(2,1,"Costelinha",12.99);mostrarTotal()}}><img src={Shooping} alt="" ></img></span>
                </div>
            
                <div className="products">
                <span className="discrition">Batata Frita</span>
                    <span className="price">R$ 14,99</span>
                    <span className="image"><img src={Itenstow} alt=""  width="240rem"></img></span>
                    <span className="add_shopping"><img src={Shooping} alt="" ></img></span>
                </div>

                <div className="products">
                <span className="discrition">Linguiça</span>
                    <span className="price">R$ 4,99</span>
                    <span className="image"><img src={Itenstree} alt="" width="240rem"></img></span>
                   
                    <span className="add_shopping"><img src={Shooping} alt="" ></img></span>
                </div>
            </div>
        </div>
       
    )


}
export default Products