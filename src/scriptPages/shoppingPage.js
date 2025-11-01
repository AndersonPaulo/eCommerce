import '../styles/shoppingPage.css'
import { Link } from 'react-router-dom'
import Itens from "../assets/Frango_Assado.png"
import { useEstiloContext } from "../components/Context"

const Shooping = () =>{

    const { esconderScrool } = useEstiloContext()

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
                <div className='box'><span className='box_one'><span className='name'>Batata</span><span className='imageAdditonal'><span className='imgBatata'></span></span><span className='productprice'>R$ 2,99</span></span><span className='box_two'><span className='downButton'>-</span><span className='number'>0</span><span className='upButton'>+</span></span></div>
                <hr></hr>
                <div className='box'><span className='box_one'><span className='name'>Linguiça</span><span className='imageAdditonal'><span className='imgLingui'></span></span><span className='productprice'>R$ 2,99</span></span><span className='box_two'><span className='downButton'>-</span><span className='number'>0</span><span className='upButton'>+</span></span></div>
                <hr></hr>
                <div className='box'><span className='box_one'><span className='name'>Bacon</span><span className='imageAdditonal'><span className='imgBacon'></span></span><span className='productprice'>R$ 2,99</span></span><span className='box_two'><span className='downButton'>-</span><span className='number'>0</span><span className='upButton'>+</span></span></div>
                <hr></hr>
                <div className='box'><span className='box_one'><span className='name'>Costelinha</span><span className='imageAdditonal'><span className='imgCostelinha'></span></span><span className='productprice'>R$ 2,99</span></span><span className='box_two'><span className='downButton'>-</span><span className='number'>0</span><span className='upButton'>+</span></span></div>
                <hr></hr>
                <div className='box'><span className='box_one'><span className='name'>Farofa</span><span className='imageAdditonal'><span className='imgFarofa'></span></span><span className='productprice'>R$ 2,99</span></span><span className='box_two'><span className='downButton'>-</span><span className='number'>0</span><span className='upButton'>+</span></span></div>

            </div>

          <div className="observations">
                <span className="title">Observações</span>
                <textarea data-qa="text-area" type="text" placeholder='Ex.:Frango bem passado...'></textarea>
            </div>

            <Link to="/buy"> 
                <div className="advanceButton" data-qa="advanceButton" onClick={esconderScrool}>
                <span data-qa="advance">Avançar</span>
                <span data-qa="value"> R$ 00,00</span>
                </div>
            </Link>
        </div>
    )

}
export default Shooping