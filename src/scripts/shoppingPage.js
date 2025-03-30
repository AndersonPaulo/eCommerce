import '../style/shoppingPage.css'
import Itens from "../assets/Frango_Assado.png"

const Shooping = () =>{

    return(
        <div className="contentShopping" data-qa="contentShopping">

            <div className="product">
                <span  className="title">Detalhes  do Produto</span>           
                <div className='item'>
                    <span className="name">Frango/linguiça/Costelinha</span>                    
                    <span className="image"><img src={Itens} alt=""></img></span>
                    <span className='productprice'>R$ 49,00</span>
                </div>            

            </div>

            <div className="additional">
                <span  className="title">Adicionais</span>
                <div className='box'><span className='box_one'><span className='name'>Batata</span><span className='imageAdditonal'><span className='imgBatata'></span></span><span className='productprice'>R$ 2,99</span></span><span className='box_two'><span className='downButton'>-</span>0<span className='upButton'>+</span></span></div>
                <hr></hr>
                <div className='box'><span className='box_one'><span className='name'>Linguiça</span><span className='imageAdditonal'><span className='imgLingui'></span></span><span className='productprice'>R$ 2,99</span></span><span className='box_two'><span className='downButton'>-</span>0<span className='upButton'>+</span></span></div>
                <hr></hr>
                <div className='box'><span className='box_one'><span className='name'>Bacon</span><span className='imageAdditonal'><span className='imgBacon'></span></span><span className='productprice'>R$ 2,99</span></span><span className='box_two'><span className='downButton'>-</span>0<span className='upButton'>+</span></span></div>
                <hr></hr>
                <div className='box'><span className='box_one'><span className='name'>Costelinha</span><span className='imageAdditonal'><span className='imgCostelinha'></span></span><span className='productprice'>R$ 2,99</span></span><span className='box_two'><span className='downButton'>-</span>0<span className='upButton'>+</span></span></div>
                <hr></hr>
                <div className='box'><span className='box_one'><span className='name'>Farofa</span><span className='imageAdditonal'><span className='imgFarofa'></span></span><span className='productprice'>R$ 2,99</span></span><span className='box_two'><span className='downButton'>-</span>0<span className='upButton'>+</span></span></div>

            </div>

            <div className="observations">
                <span className="title">Observações</span>
                <textarea data-qa="text-area" placeholder='Ex.:Frango bem passado...'></textarea>
            </div>

            <div className="advanceButton" data-qa="advanceButton">
                <span data-qa="advance">Avançar</span>
                <span data-qa="value"> R$ 00,00</span>
            </div>

        </div>
    )

}
export default Shooping