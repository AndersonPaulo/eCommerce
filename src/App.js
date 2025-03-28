import { Routes, Route } from 'react-router-dom'
import './App.css'
import Head from './scripts/head'
import Footer from './scripts/footer'
import  AboutPage from './scripts/aboutPage'
import Promotion from './scripts/products/promotion'
import Chickens from './scripts/products/chickens'
import Dessert from './scripts/products/dessert'
import Drinks from './scripts/products/drinks'
import FollowUp from './scripts/products/followUp'
import Ribs from './scripts/products/ribs'
import Sousage from './scripts/products/sausage'




function App() {  

  return (
    <div className="App">
      
          <header className="App-header">
            
              <Head />
              
              <div className="all_product">
                <Promotion/>
                <Chickens/>
                <Sousage/>
                <FollowUp/>
                <Ribs/>
                <Dessert/>
                <Drinks/>
              </div>                  

          </header>

          <footer>
              <Footer/>
          </footer>
          

              <Routes>
                <Route path="/"/>
                <Route path="/perfil-loja" element={<AboutPage />} />
              </Routes>
      
    </div>
  )
}

export default App
