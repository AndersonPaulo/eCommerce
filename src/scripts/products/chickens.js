import Add from "../../assets/cruz.svg"
import Itens from "../../assets/Frango_Assado.png"
import Shooping from "../../assets/carrinho-de-compras.svg"

const products = ()=>{

    return(
        
        <div className="name_list">
        
        <span className="name">FRANGOS</span>

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
        </div>
       
    )


}
export default products