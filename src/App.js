import { Routes, Route } from 'react-router-dom'
import { Provider } from "./scripts/Context"
import './App.css'
import Head from './scripts/head'
import Footer from './scripts/footer'
import  AboutPage from './scripts/aboutPage'
import ShoppingPage from './scripts/shoppingPage'
import Home from './scripts/home'
import Login from './scripts/loginPage'

function App() {  


  return (
    <Provider>
      <div className="App">
        
            <header className="App-header">
              
                <Head />

            </header>

            <footer>
                <Footer/>
            </footer>
            

            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/perfil-loja" element={<AboutPage />} />
                <Route path="/shopping" element={<ShoppingPage/>}/>                
            </Routes>
        
      </div>
    </Provider>
  )
}

export default App
