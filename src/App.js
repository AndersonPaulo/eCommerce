import { Routes, Route } from 'react-router-dom'
import './App.css'
import Head from './scripts/head'
import Footer from './scripts/footer'
import  AboutPage from './scripts/aboutPage'
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
          </Routes>
      
    </div>
  )
}

export default App
