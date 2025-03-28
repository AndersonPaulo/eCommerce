import { Routes, Route } from 'react-router-dom'
import './App.css'
import Head from './scripts/head'
import Footer from './scripts/footer'
import  AboutPage from './scripts/aboutPage'
import ShoppingPage from './scripts/shoppingPage'
import Home from './scripts/home'



function App() {  




  return (
    <div className="App">
      
          <header className="App-header">
            
              <Head />

          </header>

          <footer>
              <Footer/>
          </footer>
          

          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/perfil-loja" element={<AboutPage />} />
              <Route path="/shopping" element={<ShoppingPage/>}/>
          </Routes>
      
    </div>
  )
}

export default App
